import { auth } from "@/middleware/auth"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


const header = async () => {
  const session  = await auth();

  return (
    <div className="flex justify-between items-center px-4 pt-5 mb-8">
              <Button className="bg-transparent hover:bg-white p-4"><ChevronLeft className="size-8"/></Button>
              <h2 className="text-xl font-semibold">Cart Food</h2>
              <Avatar className="rounded-md size-10 mr-4">
                  <AvatarImage src={session?.image} />
                  <AvatarFallback className="rounded-md bg-primary font-medium">TA</AvatarFallback>
              </Avatar>
          </div>  
    )
}
export default header