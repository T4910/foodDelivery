import Info from "./_components/info"
import Methods from "./_components/methods" 
import Payment from "./_components/payment" 

const theitems = [
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
]

const page = () => {
  return (
    <div className="p-8 bg-slate-50 h-[100dvh]">
      {/* <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      </div> */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <Info />
          <Methods />
        </div>
        <Payment items={theitems}/>
      </div>
    </div>
  )
}

export default page