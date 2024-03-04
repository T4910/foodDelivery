'use client'
import Link from 'next/link'
import { Home } from 'lucide-react';
import { Bell } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import ShopBtn from "@/app/(routes)/(home)/_components/cartButton"
import { usePathname } from 'next/navigation';


const navbar = () => {
  const path = usePathname();

  return (
    <div className="flex w-full justify-between text-muted-foreground gap-9 mt-8 relative">
        <div className='z-10 bg-white grid grid-cols-2 place-items-center rounded-tr-[2.5rem] flex-grow py-7'>
          <Link href="#" className={`${(path === '/') && 'text-primary'}`}><Home/></Link>
          <Link href="#" className={`${(path === '/menu') && 'text-primary'}`}><BookOpen/></Link>
        </div>
        <Link href="#" className={`${(path === '/cart') && 'text-primary'} relative z-20`}>
          <ShopBtn />
        </Link>
        <div className='z-10 bg-white grid grid-cols-2 place-items-center rounded-tl-[2.5rem] flex-grow py-7'>
          <Link href="#" className={`${(path === '/saved') && 'text-primary'}`}><Bookmark /></Link>
          <Link href="#" className={`${(path === '/notification') && 'text-primary'}`}><Bell /></Link>
        </div>
        <div className='bg-white px-12 py-7 bottom-0 absolute left-1/2 -translate-x-1/2'>{' '}</div>
    </div>
  )
}

export default navbar