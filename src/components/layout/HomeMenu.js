import React from 'react'
import Image from 'next/image'
export default function HomeMenu() {
  return (
    <section>

            <div className='relative'>
                <div className='h-48  w-48 absolute '>

                    <Image src={'/sallad1.png'} layout={'fill'}  objectFit={'contain'} alt={'sallad'}></Image>
                </div>

                <div className='h-48 relative'>

                <Image src={'/sallad2.png'} layout={'fill'}  objectFit={'contain'} alt={'sallad'}></Image>
                </div>

            </div>

      

        <div className='text-center'>
        <h3 className='uppercase text-gray-600 font-semibold'> Check Out</h3>
        <h3 className='text-red-500 font-bold text-4xl italic '> Menu</h3>
        </div>

   </section>
  )
}
