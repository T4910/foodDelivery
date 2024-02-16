import Card from "../_components/foodcard"
import Search from '../_components/searchbox'
import Results from '../_components/results'
import Pagination from '../_components/pagination'
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const food = [1,2,3,4,5,6,7,8,9,0,1,2,3,4]

const page = () => {
  return (
    <div className="pt-0 px-0">
        <div className="fixed w-full bg-white pt-5">
          <div className="flex w-full justify-between">
              <Button><ChevronLeft /></Button>
              <h2 className="text-lg font-semibold">Search Food</h2>
              <Button><ShoppingCart /></Button>
          </div>
          <div className="my-8">
            <Search />
          </div>
        </div>
        <div className=" pt-40">
          <Results results={food}/>
        </div>
        <Pagination />
    </div>
  )
}

export default page