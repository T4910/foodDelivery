import Link from 'next/link'
import Details from '@/app/(routes)/(home)/cart/_components/details'
import { Button } from "@/components/ui/button"

const actions = ({ items }) => {
  return (
    <div className="text-xl font-middle p-8 py-10 bg-white flex flex-col space-y-5">
        <Details items={items}/>
        <Link href="/checkout">
            <Button className="w-full rounded-md py-6 fond-medium text-lg">Checkout</Button>
        </Link>
    </div>
  )
}

export default actions