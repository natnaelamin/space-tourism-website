import Link from 'next/link'
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"



function Navbar() {
  return (
    <div className='flex justify-between w-full absolute top-10 right-0 pl-16 text-white '>
        <div className='py-4'>
            <Image
            src="/assets/shared/logo.svg"
            width={50}
            height={15}
            alt="Picture of the author"
            />
        </div>
       
        <div className='relative flex gap-7 justify-end pr-40 pl-16 py-5 bg-slate-600 bg-opacity-50'>
        <Separator className='w-[450px] top-10 right-[725px] absolute'/>
            <Link href="/" className={buttonVariants({ variant: "outline" })}>00 Home</Link>
            <Link href="/" className={buttonVariants({ variant: "outline" })}>01 Destination</Link>
            <Link href="/" className={buttonVariants({ variant: "outline" })}>02 Crew</Link>
            <Link href="/" className={buttonVariants({ variant: "outline" })}>03 Destination</Link>
        </div>
    </div>
  )
}

export default Navbar
