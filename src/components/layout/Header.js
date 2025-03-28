import Link from "next/link"

export default function Header(){
return(
   
    <header className="flex items-center justify-between ">

      

        <nav className="flex items-center gap-8 font-bold text-gray-500">
        <Link href="" className="text-red-500  font-bold text-2xl">
        
        CEYLON PIZZA

      </Link>

          <Link href={''} className="text-primary">Home</Link>
          <Link href={''} className="text-primary">Menu</Link>
          <Link href={''} className="text-primary">About</Link>
          <Link href={''} className="text-primary">Contact</Link>
       

        </nav>

        <nav className=" flex items-center gap-5  text-gray-500 font-semibold">

        <Link href={'/login'} className="text-primary">Login</Link>

        <Link href={'/register'} className="text-white bg-red-500  px-8 py-2 rounded-full">Register</Link>

        </nav>

      </header>
    
)

}