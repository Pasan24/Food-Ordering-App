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

      <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-justify leading-relaxed">
        At Ceylon Pizza, we’ve been crafting delicious, handcrafted pizzas for generations. Our journey began in 2001,
        with a simple yet passionate mission—to serve the finest pizzas made with love, tradition, and the 
        freshest ingredients. Over the years, we have perfected our recipes, keeping the authentic flavors alive while
         embracing new and exciting tastes.

      </p>
    </section>
    </>
  );
}
