import Input from '../_components/authinput'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page({}) {
  return (
    <form className="flex justify-between flex-col">
      <div>
        <Input type="email" id="email" placeholder="Enter your Email" name="Email Address"/>
        <Input type="password" id="password" placeholder="Enter a Password" name="Password"/>
        <Input type="password" id="ConfirmPsswd" placeholder="Enter same Password" name="Confirm Password"/>
      </div>
      <div>
        <Button className="w-full font-bold">Sign up</Button>
        <Link className="block text-center mt-3" href="/login">Already have an account? Sign in</Link>
      </div>
    </form>
  )
}
