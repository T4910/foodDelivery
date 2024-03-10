import { SelectStateWrapper } from "@/app/(routes)/(home)/cart/_components/contextProvider"
import Foodlist from './_components/list'
import Actions from './_components/actions'
import Header from './_components/header'
import { db } from "@/lib/db"
import { getCldImageUrl } from 'next-cloudinary';


const page = async () => {
  const userId = ''
  const cartItems = await db.cartItem.findMany({where: {userId: userId}, include: {food: true}})
  const food = cartItems.map((item) => {
    const url = getCldImageUrl({
      width: 200,
      height: 200,
      src: `foodDeliveryImages/${item.food.image}`
    }); 

    return {
      number: item.quantity,
      tag: item.food.tag,
      id: item.food.id,
      image: url,
      name: item.food.name,
      description: item.food.description,
      price: item.food.price
    }
  })
  console.log('Items: ', food);

  return (
      <SelectStateWrapper>
        <Header />
        <Foodlist foodlist={food}/>
        <Actions items={food}/>
      </SelectStateWrapper>
  )
}

export default page