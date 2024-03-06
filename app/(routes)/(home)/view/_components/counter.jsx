'use client'

import { Button } from "@/components/ui/button"
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';
import { useState } from "react";

const counter = ({ number, scale }) => {
  const [count, setCount] = useState(number);

  return (
    <div className={`flex justify-center ${scale ?? ""}`}>
      <div className="bg-yellow-500 flex items-center relative bottom-8 rounded-full text-xl font-bold">
        <Button 
            className="bg-transparent py-8 pl-4 rounded-l-full hover:bg-yellow-600"
            onClick={() => setCount((count) => count - 1)}
            disabled={(count < 1)}
        ><Minus  className="text-black"/></Button>
          
        <div className="text-3xl px-2">{count}</div>
        <Button 
            className="bg-transparent py-8 pr-4 rounded-r-full hover:bg-yellow-600"
            onClick={() => setCount((count) => count + 1)}
            disabled={(count >= 999999999999999)}
          ><Plus className="text-black" /></Button>
      </div>
    </div>
  )
}

export default counter