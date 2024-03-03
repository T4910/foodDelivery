import Search from "./_components/searchbox"
import Navbar from "./_components/navbar"
import Foodlist from './_components/foodlist'
import { AlignLeft } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { signOut, auth } from "@/middleware/auth"




const page = async () => {
  const session  = await auth();
  return (
    <div className="flex flex-col h-[100dvh]">  
      <div className="flex-grow pl-7 py-5">
          <div className="flex justify-between">
              <Button className="p-1 px-2"><AlignLeft /></Button>
                <form action={async () => {
                  "use server"
                  await signOut();
                }}>
                 <Button type="submit">Log out</Button>
                </form>
              <Avatar className="rounded-md mr-7">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="rounded-md">CN</AvatarFallback>
              </Avatar>
          </div>
          <h1 className="text-2xl font-bold py-8">Let's eat <span className="block">Quality food 😋</span> session: {JSON.stringify(session)}</h1>
          <div className="mr-7">
            <Search />
          </div>
          <Foodlist />
      </div>
      <Navbar />
    </div>
  )
}

export default page