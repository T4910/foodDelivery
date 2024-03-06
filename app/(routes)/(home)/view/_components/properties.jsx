import { Badge } from "@/components/ui/badge"
import Price from "../../_components/price"


const properties = ({name, price, stars, calories, minToDelivery}) => {
  return (
    <div className="space-y-5">
        <div className='flex justify-between items-center'>
            <h1 className="text-3xl font-semibold w-60">{name}</h1>
            <h2><Price price={price} /></h2>
        </div>
        <div className='flex w-full justify-between space-x-1'>
            <Badge className="bg-transparent text-black text-lg fond-medium p-2 rounded-md">⭐ {stars}</Badge>
            <Badge className="bg-transparent text-black text-lg fond-medium p-2 rounded-md">🔥 {calories} calories</Badge>
            <Badge className="bg-transparent text-black text-lg fond-medium p-2 rounded-md">⏳{minToDelivery} min</Badge>
        </div>
    </div>
  )
}

export default properties