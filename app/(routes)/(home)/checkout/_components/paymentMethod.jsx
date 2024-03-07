'use client'
import { Label } from "@/components/ui/label"
import { RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image'

const method = ({value, src, children}) => {
  return (
    <div className="flex justify-between items-center">
        <Label className="text-middle text-xl text-black" htmlFor={value}>
            <div className="flex items-center space-x-5">
                <div className="relative size-10">
                    <Image src={src} alt={value} fill={true}/>
                </div>
                <p className="font-normal">{children}</p>
            </div>
        </Label>
        <RadioGroupItem className="size-6" value={value} id={value} />
    </div> 
   )
}

export default method