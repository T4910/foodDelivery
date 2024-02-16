import Foodlist from './_components/list'
import Actions from './_components/actions'

const theitems = [
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
]

const page = () => {
  return (
    <div className='flex flex-col justify-between h-[100dvh] p-8 bg-slate-50'>
        <Foodlist foodlist={theitems}/>
        <Actions items={theitems}/>
    </div>
  )
}

export default page