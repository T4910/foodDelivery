import { Button } from "@/components/ui/button"
import Search from '../_components/searchbox'
import { ChevronLeft } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import BackButton from "@/app/(routes)/(home)/_components/backBtn"


const resultheader = () => {
  return (
    <div className="fixed w-full pt-5 px-7 bg-background">
        <div className="flex items-center w-full justify-between">
            <BackButton className="bg-transparent hover:bg-white p-4" iconStyle="size-8"/>
            {/* <Button className="bg-transparent hover:bg-white p-4"><ChevronLeft /></Button> */}
            <h2 className="text-lg font-semibold">Search Food</h2>
            <Button className="bg-transparent hover:bg-white p-4"><ShoppingCart /></Button>
        </div>
        <div className="my-8 grid place-items-center">
        <Search />
        </div>
    </div>
  )
}
export default resultheader