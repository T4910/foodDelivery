import { db } from '@/lib/db'
import FoodContent from "./foodContent" 
import {
    Tabs,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

const categories = [
    {tag: 'fast food', name: '🍔 Fast food'},
    {tag: 'pasta', name: '🍝 Pasta'},
    {tag: 'swallow', name: '🍛 Swallow'},
    {tag: 'salad', name: '🥗 Salad'},
    {tag: 'drink', name: '🍹 Drinks'},
    {tag: 'jollof rice', name: '🍲 Rice'},
    {tag: 'dessert', name: '🍦 Desserts'},
]

const foodlist = async () => {
  const numberOfitems = 7;
  
  const food = await db.food.findMany(
    {
      take: numberOfitems,
      where: { tag: { has: 'fast food' } }
    }
  );

  return (
        <div className="flex-grow mt-2">
            <Tabs defaultValue={categories[0].tag} className="w-full h-full flex flex-col">
              <TabsCategory list={categories}/> 
              <FoodContent 
                food={food}  
                list={categories.map((item) => item.tag)} // An array of just the tags
              />
            </Tabs>
      </div>
  )
}

const TabsCategory = ({ list }) => {
  return(
    <>
      <TabsList className="my-4">
          <>
            {
              list.map((result, index, array) => (
                  <TabsTrigger 
                    className={(array.length-1 === index) ? "mr-7" : ""}
                    value={result.tag}
                    key={index}
                  >{result.name}</TabsTrigger>
              ))
            }
          </>
        </TabsList>
    </>
  )
}

export default foodlist