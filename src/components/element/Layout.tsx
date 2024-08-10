import React from 'react'

// iPhone 14 Pro size Layout
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='mx-auto h-[852px] w-[393px] px-4'>{children}</div>
}

export default Layout
