import Image from 'next/image'
import Counter from '../_components/counter'
import Ppt from '../_components/properties'
import Details from '../_components/details'
import Ingredients from '../_components/ingredients'
import Float from '../_components/floatingBtn'

const page = () => {
  return (
    <div>
        <Image src="/images/macaroni.jpg" alt='cake' height={200} width= {200} className='w-screen h-72'/>
        <Counter number={1}/>
        <div className='px-8'>
          <Ppt 
              name="Spicy Chicken Dimsum"
              price="5.99"   
              stars="2.5"
              calories="65"
              minToDelivery="20-30"
          />
          <Details content="Chicken Dinmsum Recipe is the delicious evening snack dish made with minced chicken and vegetables. It is a popular Chinese dumpling recipe that is steamed and served with a spicy sauce." />
          <Ingredients ingredients={['beef', 'potatoes']} />
        </div>
        <div className='flex justify-center'>
          <Float />
        </div>
    </div>
  )
}

export default page