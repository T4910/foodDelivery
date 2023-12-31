import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from 'lucide-react';
import { Search } from 'lucide-react';

const searchbox = () => {
  return (
        <div className="flex justify-between mb-8">
            <div className="w-5/6 flex items-center gap-1 bg-slate-100 rounded-md pl-1">
                <Search />
                <input className="flex-grow ml-2 focus-visible:outline-none bg-inherit w-52" type="text" name="query" id="query" placeholder="Search food..."/>
            </div>
            <Button><SlidersHorizontal /></Button>
        </div>
    )
}

export default searchbox