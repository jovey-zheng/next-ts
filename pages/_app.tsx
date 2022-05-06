import { AppProps } from 'next/app'

import Layout from '../components/layout'

import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'

// @ts-ignore
export default function App({ Component, PageProps }: AppProps) {
  return (
    <Layout>
      <Component {...PageProps} />
    </Layout>
  )
}
