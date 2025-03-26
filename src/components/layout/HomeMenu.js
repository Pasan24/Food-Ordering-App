import React from 'react';
import Image from 'next/image';

export default function HomeMenu() {
  return (
    <section className='relative flex flex-col items-center'>
      {/* Container for the salad images */}
      <div className='relative flex justify-center items-center w-full h-60'>
        
        {/* Left Salad Image */}
        <div className='h-40 w-40 absolute left-0 md:-left-12 lg:-left-20'>
          <Image src={'/sallad1.png'} layout='intrinsic' width={160} height={160} objectFit='contain' alt='Salad 1' />
        </div>
        
        {/* Right Salad Image */}
        <div className='h-40 w-40 absolute right-0 md:-right-12 lg:-right-20'>
          <Image src={'/sallad2.png'} layout='intrinsic' width={160} height={160} objectFit='contain' alt='Salad 2' />
        </div>
      </div>

      {/* Menu Heading */}
      <div className='text-center mt-6'>
        <h3 className='uppercase text-gray-600 font-semibold'>Check Out</h3>
        <h3 className='text-red-500 font-bold text-4xl italic'>Menu</h3>
      </div>
    </section>
  );
}
