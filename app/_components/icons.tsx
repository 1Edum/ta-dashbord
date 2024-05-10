import React from 'react'
import { HomeIcon } from 'lucide-react'

const icons = [
  { name: 'casa', icon: <HomeIcon size={30}/> },
  { name: 'carro', icon: '🚗' },
  { name: 'computador', icon: '💻' },
  { name: 'coração', icon: '❤️' },
];

function Icons() {
  return (
    <div>

    {icons.map((item, index) => (
      <ul key={index} className='flex justify-center items-center my-6'>
        <li className='hidden md:block'>
          {item.name} 
        </li>
        <li>
        {item.icon}
        </li>
    </ul>
      ))}
      </div>
  )
}

export default Icons