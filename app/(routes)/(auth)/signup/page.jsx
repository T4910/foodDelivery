import Input from '../_components/authinput'
import Link from "next/link"
import Fields from "../_components/signupFields"
import { Button } from "@/components/ui/button"

export default function Page({}) {
  return (
    <form className="flex flex-col h-full">
      <div className="flex-grow">
        <Fields />
      </div>
      <div>
        <Button className="w-full font-bold p-6 rounded-xl">Sign up</Button>
        <Link className="block text-center my-3" href="/login">Already have an account? Sign in</Link>
      </div>
    </form>
  )
}
