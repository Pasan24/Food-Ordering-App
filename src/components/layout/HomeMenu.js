import React from 'react';
import Image from 'next/image';

export default function HomeMenu() {
  return (
    <section className=''>
      {/* Container for the salad images */}
      <div className='absolute h-full left-0 right-0 w-full justify-start'>
        
        {/* Left Salad Image */}
        <div className='absolute left-8 -top-[70px] text-left -z-10'>
          <Image src={'/sallad1.png'} width={109} height={189} alt='Salad' />
        </div>
        
        {/* Right Salad Image */}
        <div className='absolute -top-[100px] right-0 -z-10'>
          <Image src={'/sallad2.png'} width={107} height={195} alt='Salad' />
        </div>
      </div>

      {/* Menu Heading */}
      <div className='text-center mt-6'>
        <h3 className='uppercase text-gray-600 font-semibold'>Check Out</h3>
        <h3 className='text-red-500 font-bold text-4xl italic'>Menu</h3>
      </div>

      <div>

        

      </div>
    </section>
  );
}
