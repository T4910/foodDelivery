import Info from "./_components/info"
import Methods from "./_components/paymentMethods" 
import Payment from "./_components/paymentSummary" 
import Header from "./_components/header"
import { PaymentStateWrapper as Wrapper } from "./_components/paymentStateContext"
import { db } from "@/lib/db"

const page = async () => {
  const userId = 'cltlnc7fj0000lj4iplh016df'
   const cartItems = await db.cartItem.findMany({where: {userId: userId}, include: {food: true}})

    const foodItems = cartItems.map((item) => ({
        number: item.quantity,
        price: item.food.price
    }))

    console.log(foodItems)

    return (
      <div className="flex flex-col bg-slate-50 h-[100dvh] w-screen">
        <Wrapper>
          <Header />      
          <div className="flex flex-col flex-grow">
            <Info />
            <Methods />
          </div>
          <Payment items={foodItems}/>
        </Wrapper>
      </div>
    )
}

export default page