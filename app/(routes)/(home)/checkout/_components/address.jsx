import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react';

const address = () => {
  return (
    <div className='flex mb-8 bg-white rounded-md'>
      <div className='flex w-full items-center justify-between p-4'>
        <div>
            <h2 className='text-lg font-medium'>Address</h2>
            <p className='w-44 text-muted-foreground'>NY, United States 300 Post Street 1222422</p>
        </div>
        <Button className="bg-transparent text-black"><Pencil /></Button>
      </div>
    </div>
  )
}

export default address