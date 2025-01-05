import React from 'react'

const Callout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=' border-l-4 border flex items-center my-6 rounded-lg'>
      <div className=' p-4'>{children}</div>
    </div>
  )
}

export default Callout