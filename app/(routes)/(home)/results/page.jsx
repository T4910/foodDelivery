import Header from "@/app/(routes)/(home)/_components/resultheader"
import Results from '../_components/results'
import Pagination from '../_components/pagination'
import { db } from '@/lib/db'
import { redirect } from "next/navigation"


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

const page = async ({ params, searchParams }) => {
    const query = searchParams['q'];
    let page = searchParams['page'] ?? 1;
    const numberOfResultsPerPage = 5;
    const searchLogic = {
      where: {
        OR: [
          {name: { contains: query, mode: 'insensitive' }},
          {description: { contains: query, mode: 'insensitive' }},
          {tag: { hasSome: [query] }},
        ],
      },
    }

    if(query === undefined) redirect('/');
    if(isNaN(parseInt(page, 10)) || page <= 0) redirect(`/results?q=${query}&page=1`);


    const totalNumResults = await prisma.food.count(searchLogic);
    const NumberOfPages = Math.ceil(totalNumResults / numberOfResultsPerPage);
    const searchResults = await prisma.food.findMany(
      {      
        take: numberOfResultsPerPage,
        skip: (page - 1) * numberOfResultsPerPage,
        ...searchLogic
    });

    if(searchResults.length === 0) redirect(`/results?q=${query}&page=${NumberOfPages}`);

    // console.log(searchResults.map((result) => result.id), totalNumResults, NumberOfPages);

    return (
      <div className="pt-0 px-0 h-[100dvh] flex flex-col">
          <Header />
          <Results results={searchResults}/>
          <Pagination info={{
            numberOfPages: NumberOfPages,
            query: query,
            currentPage: page,
          }}/>
      </div>
    );
}

export default page