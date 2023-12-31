import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';

const floatingBtn = () => {
  return (
    // user clicks this button before counter appears and swaps '+' for '-' (or anything less)
    <Button className="rounded-full absolute scale-150 p-2 bottom-12 border-b border-white bg-yellow-500">
      <Plus className='text-black'/>
    </Button>
  )
}

export default floatingBtn