import express from 'express'
import next from 'next'
import { createProxyMiddleware } from 'http-proxy-middleware'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  const cookiesConfig = {
    // configure your cookie here
  }
  const cookies = Object.keys(cookiesConfig)
    .map((key) => `${key}=${cookiesConfig[key]}`)
    .join(';')

  server.use(
    '/*',
    createProxyMiddleware({
      target: process.env.DEV_URL, // configure your host here
      changeOrigin: true,
      headers: {
        Cookie: cookies,
      },
    }),
  )

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
