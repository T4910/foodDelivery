import Image from 'next/image'
import Counter from '../_components/counter'
import Ppt from '../_components/properties'
import Details from '../_components/details'
import Ingredients from '../_components/ingredients'
import Float from '../_components/floatingBtn'
import Header from "../_components/header"
import { db } from "@/lib/db"
import { getCldImageUrl } from 'next-cloudinary';

const page = async ({ params: {id} }) => {
  const info = await db.food.findUnique({where: {id: id}})

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
        <Counter number={0} toZero/>
        <div className='px-8 space-y-5'>
          <Ppt 
              name={info.name}
              price={info.price}   
              stars="5"
              calories={info.calories}
              minToDelivery="20-30"
          />
          <Details content={info.description} />
          {/* <Ingredients ingredients={['beef', 'potatoes']} /> */}
        </div>
        <Float />
    </div>
  )
}

export default page