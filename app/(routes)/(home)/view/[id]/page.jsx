import Image from 'next/image'
import Counter from '../_components/counter'
import Ppt from '../_components/properties'
import Details from '../_components/details'
import Ingredients from '../_components/ingredients'
import Float from '../_components/floatingBtn'
import Header from "../_components/header"
import { db } from "@/lib/db"
import { auth } from "@/middleware/auth"
import { getCldImageUrl } from 'next-cloudinary';
import cartButton from '../../_components/cartButton'

const page = async ({ params: {id} }) => {
  const info = await db.food.findUnique({where: {id: id}})
  const userId = ''
  const isInCart = await db.cartItem.findMany({where: {userId: userId, foodId: id}})
  const session = await auth()

  const url = getCldImageUrl({
    width: 200,
    height: 200,
    src: `foodDeliveryImages/${info.image}`
  });      

  return (
    <div className='mb-32'>
        <Header />
        <div  className='relative h-[45dvh] aspect-square object-cover'>
          <Image src={url} alt='cake' fill={true} className='object-cover'/>
        </div>
        <div className='relative'>
          {(isInCart.length !== 0) ? <Counter toZero number={isInCart[0]?.quantity} /> : null}
        </div>
        <div className='pt-12 px-8 space-y-5'>
          <Ppt 
              name={info.name}
              price={info.price}   
              stars={info.starts}
              calories={info.calories}
              minToDelivery="20-30"
          />
          <Details content={info.description} />
          {/* <Ingredients ingredients={['beef', 'potatoes']} /> */}
        </div>
        <Float 
          foodId={id} 
          userId={userId}
          quantity={1}
          inCart={isInCart.length !== 0}
        />
    </div>
  )
}

export default page