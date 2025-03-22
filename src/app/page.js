import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between ">
        <Link href="" className="text-red-500  font-bold text-2xl">
          CEYLON PIZZA
        </Link>

        <nav className="flex">
          <Link href={''} className="text-primary">Home</Link>
          <Link href={''} className="text-primary">Menu</Link>
          <Link href={''} className="text-primary">About</Link>
          <Link href={''} className="text-primary">Contact</Link>
          <Link href={''} className="text-primary">Login</Link>
        </nav>
      </header>
    </>
  );
}
