import { FC } from 'react'

const Navbar: FC<{ name: string }> = ({ name }) => {
  return <div className="navbar tw-p-5 tw-text-center">Navbar {name}</div>
}

export default Navbar
