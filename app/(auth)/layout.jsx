import Link from "./_components/authlinks"
import Image from 'next/image'
import Logo from './_components/logo'

export default function AuthLayout({ children }) {
  return (
      <div>
        <Image src="/images/food_bg.svg" alt='food background' height={200} width= {200} className='w-screen h-28 mt-2 mb-5 object-cover'/>
        <Logo />
        <div className="flex justify-evenly">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
        </div>
        <div className="px-8 pt-4">
          {children}
        </div>
    </div>
  )
}
