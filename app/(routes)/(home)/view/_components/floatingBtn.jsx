import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';

const floatingBtn = () => {
  return (
    // user clicks this button before counter appears and swaps '+' for '-' (or anything less)
    <Button className="bg-primary rounded-full p-2 size-20 text-black border-4 border-background fixed bottom-6 left-1/2 -translate-x-1/2">
      <Plus className='text-black'/>
    </Button>
  )
}

export default floatingBtn