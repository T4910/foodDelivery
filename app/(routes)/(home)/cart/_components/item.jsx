import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"
import Details from '@/app//(routes)/(home)/cart/_components/foodDetails'
import { Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

const item = ({src, name, description, price, number}) => {
  return (
    <div className="w-fit mx-auto relative">
      <div className='z-10 relative flex items-center mx-auto px-3 py-3 w-fit min-w-[370px] justify-between bg-white rounded-lg space-x-2'>
          {/* <Checkbox className="mr-1"/> */}
          <div className="relative flex-grow size-28 aspect-square">
            <Image className="aspect-square" src={src} fill={true}/>
          </div>
          <Details 
            name={name}
            description={description}
            price={price}
            number={number}
          />
      </div>
      <Button className="h-full pr-7 hover:bg-red-500 w-20 bg-red-200 size-full flex justify-end absolute bottom-0 right-0 rounded-lg z-0"><Trash2 className="size-8"/></Button>
    </div>
  )
}

export default item