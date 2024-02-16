import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Price from "../../_components/price"


const actions = ({ items }) => {
    const deliveryPrice = 20.00
  return (
    <div className="text-xl font-middle pt-4">
        <div className="flex justify-between mb-2">
            <div>Items ({items.length})</div>
            <div><Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0)} /></div>
        </div>
        <div className="flex justify-between mb-2">
            <div>Total Price + Delivery</div>
            <div><Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0) + deliveryPrice} /></div>
        </div>
        <Link href="/checkout">
            <Button className="w-full rounded-md mt-4 py-6 fond-semibold text-2xl">Checkout</Button>
        </Link>
    </div>
  )
}

export default actions