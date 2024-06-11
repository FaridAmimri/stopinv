/** @format */
'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { id: 1, title: 'Accueil', url: '/accueil' },
  { id: 2, title: 'Services', url: '/services' },
  { id: 3, title: 'Notre entreprise', url: '/notreentreprise' },
  { id: 4, title: 'Contact', url: '/contact' }
]

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {!open ? (
        <div onClick={() => setOpen(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
            />
          </svg>
        </div>
      ) : (
        <div onClick={() => setOpen(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      )}
      {open && (
        <div className='bg-green-500 text-white absolute left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col justify-center items-center gap-8 text-3xl z-10 transition-all ease-in-out'>
          {links.map((item) => (
            <Link to={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu
