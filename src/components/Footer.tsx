/** @format */

import { Link } from 'react-router-dom'
import { menu } from '../utils/data'
import { Mail, MapPinned, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className=' flex flex-col gap-8 p-8 bg-slate-800 text-white md:h-auto md:gap-10 2xl:h-1/2'>
      <div className='flex flex-1 flex-col lg:flex-row lg:items-center gap-10'>
        <div className='flex flex-col gap-12 lg:gap-6'>
          <div className='flex items-center gap-2'>
            <img
              src='/logo-blanc.png'
              alt='nettoyage et désinfection'
              width={40}
              height={40}
              className='rounded-full'
            />
            <h1 className='text-3xl font-bold '>StopInvasion</h1>
          </div>

          <span className='text-2xl font-semibold'>
            Désinfection, <span className='text-green-500'>Dératisation</span>{' '}
            et <span className='text-red-500'>Désinsectisation</span>
          </span>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <MapPinned />
              <p className=''>13 rue Alfred Dumont, Dunkerque</p>
            </div>
            <div className='flex items-center gap-2'>
              <Phone />
              <Link to='https://wa.me/33652156575' className=''>
                +33 6 52 15 65 75
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <Mail />
              <Link to='mailto: contact@stopinvasion.fr' className=''>
                contact@stopinvasion.fr
              </Link>
            </div>
          </div>
        </div>

        <div className='flex-1 flex justify-between lg:justify-around text-lg md:items-center md:gap-10 lg:pt-20'>
          <ul className='flex flex-col'>
            {menu.map((item) => (
              <li key={item.id} className='lg:pb-3'>
                <Link className='pr-5 hover:text-green-500' to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex justify-between'>
            <div className='mr-8'>
              <h6 className='text-green-500 text-center pb-2'>Suivez-nous</h6>
              <ul className='leading-10 text-base'>
                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-facebook'
                  >
                    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                  </svg>
                  Stop_Invasion
                </li>
                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-instagram'
                  >
                    <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                  </svg>
                  Stop_Invasion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center font-bold text-sm'>
        <Link to='https://faridigital.fr/' className='text-gray-500'>
          @2023 Made with <span className='text-red-500'>♥</span> by FariDigital
        </Link>
      </div>
    </footer>
  )
}

export default Footer
