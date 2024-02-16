import Link from "next/link"
import Fields from "../_components/loginFields"
import { Button } from "@/components/ui/button"

export default function Page({}) {
  return (
    <form className="flex flex-col h-full">
      <div className="flex-grow">
        <Fields />
      </div>
      <div className="h-fit">
        <Link href="#" className="text-end block mb-6">Forgot Password?</Link>
        <Button className="w-full font-bold p-6 rounded-xl">Login</Button>
        <Link className="block text-center my-3" href="/signup">Don't have an account? Create one</Link>
      </div>
    </form>
  )
}
