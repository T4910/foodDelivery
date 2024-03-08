import Counter from '../../view/_components/counter'
import Price from '../../_components/price'

const foodDetails = ({ name, description, price, number }) => {
    return (
        <div className='pl-2 flex flex-col h-full py-1 gap-1'>
            <div className='flex-grow'>
                <h3 className='w-fit font-medium text-lg'>{name}</h3>
                <p className='w-44 text-wrap text-muted-foreground'>{description}</p>
            </div>
            <div className="flex items-center gap-7">
                <Price price={price}/>
                <Counter 
                    number={number}
                    bodyStyle="bottom-0 text-md font-medium"
                    btnStyle="py-0 px-3 text-lg"
                    iconStyle="size-4"
                    numStyle="text-lg font-semibold px-0.5"
                />
            </div>
        </div> 
    )
}
export default foodDetails