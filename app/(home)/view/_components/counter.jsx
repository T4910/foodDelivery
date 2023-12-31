import { Button } from "@/components/ui/button"
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';

const counter = ({ number, scale }) => {
  return (
    <div className={`flex justify-center ${scale ?? ""}`}>
      <div className="bg-yellow-500 flex items-center relative bottom-8 rounded-full text-xl font-bold">
        <Button className="bg-transparent py-8 pl-4 rounded-l-full hover:bg-yellow-600"><Minus  className="text-black"/></Button>
        <div className="text-3xl px-2">{number}</div>
        <Button className="bg-transparent py-8 pr-4 rounded-r-full hover:bg-yellow-600"><Plus className="text-black" /></Button>
      </div>
    </div>
  )
}

export default counter