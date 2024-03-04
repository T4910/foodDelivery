import { Button } from "@/components/ui/button"
import { AlignLeft } from 'lucide-react';
import { signOut } from "@/middleware/auth"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const menubtn = () => {
  return (
    <div>
        <DropdownMenu className="left-7">
            <DropdownMenuTrigger asChild>
                <Button className="p-1 px-2 text-black bg-white"><AlignLeft /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="relative left-7 top-2">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                <form action={async () => {
                  "use server"
                  await signOut();
                }}>
                <Button type="submit">Log out</Button>
              </form>

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}
export default menubtn