import Link from 'next/link'
import { Home } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Bell } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Bookmark } from 'lucide-react';


const navbar = () => {
  return (
    <div className="flex w-full justify-around">
        <Link href="#"><Home /></Link>
        <Link href="#"><BookOpen/></Link>
        <Link href="#"><ShoppingBag /></Link>
        <Link href="#"><Bookmark /></Link>
        <Link href="#"><Bell /></Link>
    </div>
  )
}

export default navbar