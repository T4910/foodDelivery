import Link from "next/link"
import Input from '../_components/authinput'
import { Button } from "@/components/ui/button"

export default function Page({}) {
  return (
    <form className="flex justify-between flex-col">
      <div>
        <Input type="email" id="email" placeholder="Enter your Email" name="Email Address"/>
        <Input type="password" id="password" placeholder="Enter your Password" name="Password"/>
        <Link href="#" className="text-end block">Forgot Password?</Link>
      </div>
      <div>
        <Button className="w-full font-bold mt-6">Login</Button>
        <Link className="block text-center my-3" href="/signup">Don't have an account? Create one</Link>
      </div>
    </form>
  )
}
