import React from 'react'
import Icons from './icons'

const Sidebar = () => {
  return (
    <header className='h-full w-1/4 bg-red-900 shadow-3xl'>
      <div className='w-full h-16 bg-gray-50 shadow-2xl'></div>
      <nav>
        <Icons />
      </nav>
    </header>
  )
}

export default Sidebar