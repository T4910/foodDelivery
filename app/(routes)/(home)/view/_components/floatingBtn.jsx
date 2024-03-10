import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';
import { IoMdClose as Cancel } from "react-icons/io";
import { addToCart, removeFromCart } from "@/app/actions/cart"

const floatingBtn = ({ foodId, userId, quantity, inCart }) => {
  const addToCartWithIds = addToCart.bind(null, {foodId, userId, quantity, path: `/view/${foodId}`})
  const removeFromCartWithIds = removeFromCart.bind(null, {foodId, userId, path: `/view/${foodId}`})

  return (
    <form action={inCart ? removeFromCartWithIds : addToCartWithIds}>
      <Button className="bg-primary rounded-full p-2 size-20 text-black border-4 border-background fixed bottom-6 left-1/2 -translate-x-1/2" type="submit">
        {inCart ? <Cancel className='size-8'/> : <Plus className='text-black'/>}
      </Button>
    </form>
  )
}

export default floatingBtn