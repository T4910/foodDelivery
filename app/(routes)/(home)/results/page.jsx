import Header from "@/app/(routes)/(home)/_components/resultheader"
import Results from '../_components/results'
import Pagination from '../_components/pagination'

const food =  [
  {tag: 'fast_food', id: '1', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {tag: 'fast_food', id: '32', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {tag: 'fast_food', id: '100', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.89'},
  {tag: 'fruit', id: '2', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {tag: 'vegetable', id: '3', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {tag: 'dessert', id: '4', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {tag: 'dessert', id: '5', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
  {tag: 'dessert', id: '8', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
]

const page = () => {
  return (
    <div className="pt-0 px-0 h-[100dvh] flex flex-col">
        <Header />
        <Results results={food}/>
        <Pagination />
    </div>
  )
}

export default page