import { FC } from 'react'

const Footer: FC<{ from: number }> = ({ from }) => {
  return <div className="tw-p-5 tw-text-center">Footer @{from}</div>
}

export default Footer
