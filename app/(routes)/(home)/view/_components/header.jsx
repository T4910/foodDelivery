import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';


const resultheader = () => {
  return (
    <div className="flex w-full justify-between px-5 p-3 z-20">
        <Button className="bg-transparent p-2 size-12 hover:bg-white"><ChevronLeft className="size-16" /></Button>
        <Button className="bg-transparent p-2 size-12 hover:bg-white"><ShoppingCart className="size-7" /></Button>
    </div>
  )
}
export default resultheader