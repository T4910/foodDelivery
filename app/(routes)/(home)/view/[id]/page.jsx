import Image from 'next/image'
import Counter from '../_components/counter'
import Ppt from '../_components/properties'
import Details from '../_components/details'
import Ingredients from '../_components/ingredients'
import Float from '../_components/floatingBtn'
import Header from "../_components/header"

const page = () => {
  return (
    <div className='mb-32'>
        <Header />
        <div  className='relative h-[45dvh] aspect-square object-cover'>
          <Image src="/images/macaroni.jpg" alt='cake' fill={true} className='object-cover'/>
        </div>
        <Counter number={0}/>
        <div className='px-8 space-y-5'>
          <Ppt 
              name="Spicy Chicken Dimsum"
              price="5.99"   
              stars="2.5"
              calories="65"
              minToDelivery="20-30"
          />
          <Details content="Chicken Dinmsum Recipe is the delicious evening snack dish made with minced chicken and vegetables. It is a popular Chinese dumpling recipe that is steamed and served with a spicy sauce." />
          {/* <Ingredients ingredients={['beef', 'potatoes']} /> */}
        </div>
        <Float />
    </div>
  )
}

export default page