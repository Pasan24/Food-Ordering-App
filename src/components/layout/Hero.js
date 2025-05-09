import React from 'react'
import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero() {
  return (

    <section className='hero'>
        

        <div className='py-12'>

        <h1 className='text-4xl font-semibold '>
            EveryThing<br/> is better <br/> with a&nbsp;  <span className='text-red-500'> Pizza </span>
         </h1>

        <p className='mt-4 text-sm'>Pizza is the missing piece that makes every day complete, a simple yet delecious joy in life.</p>

        <div className="flex gap-4 mt-4">
            <button className="text-white bg-red-500  px-4 py-2 rounded-full flex  gap-2 uppercase text-sm items-center ">Order Now <Right/></button>
            <button className="flex gap-2   py-2 text-gray-600 font-semibold ">Learn More <Right/></button>
        </div>
        </div>

      
      
        
        <div className=' relative'>

        <Image src={"/pizza.png"} alt={'pizza'}  layout={'fill'} objectFit={'contain'}/>

        </div>
         
    </section>
  )
}
