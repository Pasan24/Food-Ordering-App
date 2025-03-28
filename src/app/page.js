import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <HomeMenu/>

    <section  className='text-center my-16'>
      <SectionHeaders
        subHeader={'Our Story'} 
        mainHeader={'About Us'}
      />
      <div className="max-w-2xl mx-auto mt-4 text-gray-500 text-justify leading-relaxed flex flex-col gap-4 ">

      <p >
        At Ceylon Pizza, we’ve been crafting delicious, handcrafted pizzas for generations. Our journey began in 2001,
        with a simple yet passionate mission—to serve the finest pizzas made with love, tradition, and the 
        freshest ingredients. Over the years, we have perfected our recipes, keeping the authentic flavors alive while
         embracing new and exciting tastes.

      </p>

      

      <p>
      From the first bite to the last, every slice is made with care and dedication. At Ceylon Pizza, we don’t just serve 
      food—we create moments of joy, laughter, and togetherness. 
      Whether it's a family gathering or a late-night craving, our pizzas are here to make every occasion special.
      </p>


      <p>
      With a commitment to quality and customer satisfaction, we take pride in offering a menu that caters 
      to all pizza lovers. Whether you 
      crave classic flavors or unique creations, our pizzas are made to bring people together. 
      Join us for a slice of tradition and taste the difference.
      </p>

      </div>


    </section>

    <section>
      
    </section>
    </>
  );
}
