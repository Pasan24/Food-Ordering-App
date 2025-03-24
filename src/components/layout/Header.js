import Link from "next/link"

export default function Header(){
return(
   
    <header className="flex items-center justify-between ">

        <Link href="" className="text-red-500  font-bold text-2xl">
        
          CEYLON PIZZA

        </Link>

        <nav className="flex items-center gap-8 font-bold text-gray-500">

          <Link href={''} className="text-primary">Home</Link>
          <Link href={''} className="text-primary">Menu</Link>
          <Link href={''} className="text-primary">About</Link>
          <Link href={''} className="text-primary">Contact</Link>
          <Link href={''} className="text-white bg-red-600  px-8 py-2 rounded-full">Login</Link>

        </nav>

      </header>
    
)

}