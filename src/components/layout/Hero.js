import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (

    <section className='grid grid-cols-2'>
        

        <div>

        <h1 className='text-4xl font-semibold'>EveryThing is better with a Pizza </h1>
        <p className='mt-4'>Pizza is the missing piece that makes every day complete, a simple yet delecious joy in life.</p>

        <div className="flex gap-4">
            <button className="text-white bg-red-600  px-8 py-2 rounded-full">Order Now</button>
            <button className="">Learn More</button>
        </div>
        </div>

      
      
        
        <div className=' relative'>

        <Image src={"/pizza.png"} alt={'pizza'}  layout={'fill'} objectFit={'contain'}/>

        </div>
         
    </section>
  )
}
