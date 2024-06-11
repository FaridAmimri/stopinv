/** @format */
import { ServiceItemType } from '../types/types'

const ServiceItem = ({ data }: { data: ServiceItemType }) => {
  return (
    <div className='flex flex-col gap-3 w-[250px] h-[250px] items-center justify-center hover:scale-110 transition-all ease-in-out cursor-pointer shadow-lg p-4 rounded-lg odd:bg-green-50 even:bg-red-50'>
      <div className=''>
        <img src={data.img} alt={data.title} width={66} height={66} />
      </div>
      <div className='text-xl font-bold md:text-center'>
        <h2 className=''>{data.title}</h2>
      </div>
      <div className='text-sm text-gray-400 md:w-2/3  md:text-center'>
        <span>{data.desc}</span>
      </div>
    </div>
  )
}

export default ServiceItem
