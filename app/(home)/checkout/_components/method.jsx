'use client'
import { Label } from "@/components/ui/label"
import { RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image'

const method = ({value, src, children}) => {
  return (
    <div className="flex justify-between items-center">
        <Label className="text-middle text-xl text-black" htmlFor={value}>
            <div className="flex">
                <Image href={src} alt={value} width={10} heigth={10} className="w-10 h-10"/>
                <h1>{children}</h1>
            </div>
        </Label>
        <RadioGroupItem value={value} id={value} />
    </div> 
   )
}

export default method