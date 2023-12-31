import { Badge } from "@/components/ui/badge"
import Price from "../../_components/price"


const properties = ({name, price, stars, calories, minToDelivery}) => {
  return (
    <div className="mb-8">
        <div className='flex justify-between items-center mb-8'>
            <h1 className="text-2xl font-bold w-60">{name}</h1>
            <h2><Price price={price} /></h2>
        </div>
        <div className='flex w-full justify-between'>
            <Badge className="bg-transparent text-black text-lg fond-medium p-3 rounded-md">{ stars}</Badge>
            <Badge className="bg-transparent text-black text-lg fond-medium p-3 rounded-md">🔥 {calories} calories</Badge>
            <Badge className="bg-transparent text-black text-lg fond-medium p-3 rounded-md">{minToDelivery} min</Badge>
        </div>
    </div>
  )
}

export default properties