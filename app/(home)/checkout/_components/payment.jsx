import { Button } from "@/components/ui/button"
import Price from "../../_components/price"

const actions = ({ items }) => {
    const deliveryPrice = 20.00
  return (
    <div className="text-xl font-middle">
        <div className="flex justify-between mb-2">
            <div>Items ({items.length})</div>
            <Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0)} />
        </div>
        <div className="flex justify-between mb-2">
            <div>Delivery Fee</div>
            <Price price={deliveryPrice} />
        </div>
        <div className="flex justify-between mb-2">
            <div>Total Price</div>
            <Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0) + deliveryPrice} />
        </div>
        <Button className="w-full mt-4 py-6 fond-semibold text-2xl">Confirm</Button>
    </div>
  )
}

export default actions