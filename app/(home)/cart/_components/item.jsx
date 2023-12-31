import Image from 'next/image'
import Counter from '../../view/_components/counter'
import Price from '../../_components/price'

const item = ({src, name, details, price, number}) => {
  return (
    <div className='flex w-full justify-between bg-white rounded-lg'>
        {/* <input type="radio" name="" id="" /> */}
        <Image className='rounded-l-lg w-28 aspect-square object-fit' src="/images/cake.png" width={200} height={200}/>
        <div>
            <h3 className='w-fit font-semibold text-2xl'>{name}</h3>
            <p className='w-fit text-muted-foreground'>{details}</p>
            <div className="flex">
                <p><Price price={price} /></p>
                <Counter scale="scale-50" number={number}/>
            </div>
        </div>
    </div>
  )
}

export default item