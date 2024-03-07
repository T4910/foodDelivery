import Info from "./_components/info"
import Methods from "./_components/paymentMethods" 
import Payment from "./_components/paymentSummary" 
import Header from "./_components/header"

const theitems = [
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
    {name: "Cake", details: "Chocolate is good", price: "150.00", number: 1},
]

const page = () => {
    return (
      <div className="flex flex-col bg-slate-50 h-[100dvh]">
        <Header />      
        <div className="flex flex-col flex-grow">
          <Info />
          <Methods />
        </div>
        <Payment items={theitems}/>
      </div>
    )
}

export default page