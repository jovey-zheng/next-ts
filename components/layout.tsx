import { FC } from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout: FC<any> = ({ children }) => {
  return (
    <>
      <Navbar name="Jovey" />
      {children}
      <Footer from={new Date().getFullYear()} />
    </>
  )
}

export default Layout
