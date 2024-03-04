import { auth } from "@/middleware/auth"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import MenuBTN from "./menubtn";


const header = async () => {
  const session  = await auth();

  return (
    <div className="flex justify-between">
              <MenuBTN />
              <Avatar className="rounded-md mr-7">
                  <AvatarImage src={session?.image} />
                  <AvatarFallback className="rounded-md bg-primary font-medium">TA</AvatarFallback>
              </Avatar>
          </div>  
    )
}
export default header