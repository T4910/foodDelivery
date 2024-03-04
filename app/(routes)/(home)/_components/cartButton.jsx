import { ShoppingBag } from 'lucide-react';

const cartButton = () => {
  return (
    <div className='bg-primary rounded-full p-6 text-black border-4 border-background absolute bottom-6 left-1/2 -translate-x-1/2'>
        <ShoppingBag />
    </div>
  )
}
export default cartButton