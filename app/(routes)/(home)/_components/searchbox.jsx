import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from 'lucide-react';
import { Search } from 'lucide-react';

const searchbox = () => {
  return (
        <div className="mr-7">
            <div className="flex justify-between space-x-5">
                <div className="w-5/6 flex items-center gap-1 bg-slate-100 rounded-md px-4">
                    <Search />
                    <input className="flex-grow ml-2 focus-visible:outline-none bg-inherit w-52 py-3" type="text" name="query" id="query" placeholder="Search food..."/>
                </div>
                <Button className="text-black py-6"><SlidersHorizontal /></Button>
            </div>
        </div>

    )
}

export default searchbox