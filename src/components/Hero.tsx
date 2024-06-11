/** @format */

import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { hero } from '@/utils/data'

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <div className='h-[calc(100vh-6rem)] flex flex-col p-8 pt-0 gap-6 lg:flex-row md:gap-10 md:h-[calc(100vh-7rem)]'>
      <div className='flex-1 flex flex-col gap-6 justify-center'>
        <h2 className='text-4xl font-bold leading-normal md:text-5xl'>
          Désinfection, Dératisation et Désinsectisation
        </h2>
        <span className='text-xl text-gray-400 font-semibold my-6  md:w-2/3 2xl:text-3xl'>
          Le chimique ce n'est pas automatique
        </span>
        <div className='flex justify-between text-lg md:w-2/3'>
          <a
            href='#booking'
            className='w-32 h-10 text-sm flex items-center justify-center bg-green-500 hover:bg-red-500 rounded p-2 px-6 text-white md:w-40'
          >
            Estimer
          </a>

          <Link
            to='/contact'
            className='w-32 h-10 text-sm flex items-center justify-center bg-black hover:bg-red-500 text-white rounded p-2 px-6 md:w-40'
          >
            Contacter
          </Link>
        </div>
      </div>

      <div className='flex-1 overflow-hidden flex items-center justify-center'>
        <Carousel
          plugins={[plugin.current]}
          className='w-full max-w-xl'
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {hero.map((slide, index) => (
              <CarouselItem key={index}>
                <div className='p-1 rounded-lg'>
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className='rounded-lg object-cover'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Hero
