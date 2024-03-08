import Foodlist from './_components/list'
import Actions from './_components/actions'
import Header from './_components/header'
import { SelectStateWrapper } from "@/app/(routes)/(home)/cart/_components/contextProvider"

const food =  [
  {number: 1, tag: 'fast_food', id: '1', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {number: 1, tag: 'fast_food', id: '32', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {number: 1, tag: 'fast_food', id: '100', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.89'},
  {number: 1, tag: 'fruit', id: '2', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {number: 1, tag: 'vegetable', id: '3', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {number: 1, tag: 'dessert', id: '4', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi with cinammon on the side', calories: '63', price: '9.80'},
  {number: 1, tag: 'dessert', id: '5', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {number: 1, tag: 'dessert', id: '8', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
]

const page = () => {
  return (
      <SelectStateWrapper>
        <Header />
        <Foodlist foodlist={food}/>
        <Actions items={food}/>
      </SelectStateWrapper>
  )
}

export default page