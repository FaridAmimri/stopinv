/** @format */

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuItemType } from '../types/types'
import { menu } from '../utils/data'
import Menu from './Menu'
import { Button } from './ui/button'

const Header = () => {
  const location = useLocation()
  const activeLink = location.pathname.substring(1)

  const [activeMenu, setActiveMenu] = useState('home')

  useEffect(() => {
    setActiveMenu(activeLink)
  }, [activeLink])

  return (
    <header className='flex items-center p-8 pt-4 justify-between'>
      {/* Logo */}
      <Link to='/accueil' className='flex items-center'>
        <img
          src='/logo.png'
          alt='nettoyage et désinfection'
          width={36}
          height={36}
        />
        <span className='text-xl font-bold pl-1'>StopInvasion</span>
      </Link>

      {/* Links */}
      <div className='hidden md:flex gap-12'>
        {menu.map((item) => {
          const isActive =
            item.name.replace(' ', '').toLowerCase() === activeMenu
          const textClass = `text-lg cursor-pointer ${
            isActive ? 'text-green-500' : 'text-black'
          }`
          const handleClick = (item: MenuItemType) => {
            setActiveMenu(item.name)
          }
          return (
            <Link
              key={item.id}
              className={textClass}
              onClick={() => handleClick(item)}
              to={item.link}
            >
              {item.name}
            </Link>
          )
        })}
      </div>

      {/* Mobile Menu*/}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* Agreement */}
      <div className='hidden md:flex '>
        <Button className='bg-green-400 rounded p-2 px-6 text-white'>
          Agrément n°054872
        </Button>
      </div>
    </header>
  )
}

export default Header
