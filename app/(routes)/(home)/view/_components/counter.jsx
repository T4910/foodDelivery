'use client'

import { Button } from "@/components/ui/button"
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';
import { useState } from "react";
import { cn } from "@/lib/utils"


const counter = ({ number, bodyStyle, btnStyle, numStyle, iconStyle, toZero }) => {
  const [count, setCount] = useState(number);

  return (
    <div className="flex justify-center">
      <div className={cn("bg-primary flex items-center relative bottom-8 rounded-full text-xl font-bold",  bodyStyle)}>
        <Button 
            className={cn("bg-transparent py-8 pl-4 rounded-l-full hover:bg-yellow-600", btnStyle)}
            onClick={() => setCount((count) => count - 1)}
            disabled={(count <= (toZero ? 0 : 1))}
        ><Minus  className={cn("text-black", iconStyle)}/></Button>
        <div className={cn("text-3xl px-2", numStyle)}>{count}</div>
        <Button 
            className={cn("bg-transparent py-8 pr-4 rounded-r-full hover:bg-yellow-600", btnStyle)}
            onClick={() => setCount((count) => count + 1)}
            disabled={(count >= 50)}
          ><Plus className={cn("text-black", iconStyle)}/></Button>
      </div>
    </div>
  )
}

export default counter