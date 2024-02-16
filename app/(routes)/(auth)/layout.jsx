import Link from "./_components/authlinks"
import Image from 'next/image'
import Hero from './_components/hero'

export default function AuthLayout({ children }) {
  return (
      <div className="flex flex-col h-[100dvh]">
        <div className="h-[55dvh] flex flex-col">
          <Hero />
          <div className="flex justify-evenly py-4">
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
          </div>
        </div>
        <div className=" bg-slate-50 bg-opacity-10 px-8 pb-6 flex-grow">
          {children}
        </div>
    </div>
  )
}
