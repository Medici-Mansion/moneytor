import React from 'react'
import StatusHeader from '~/components/element/StatusHeader'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[852px] w-[393px]'>
      <StatusHeader />
      {children}
    </div>
  )
}

export default layout
