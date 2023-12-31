import Card from "./foodcard"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

let food = [
    {tag: 'fast_food', id: '1', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
    {tag: 'fruit', id: '2', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
    {tag: 'vegetable', id: '3', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
    {tag: 'dessert', id: '4', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
]


const foodlist = () => {
  return (
        <div>
            <Tabs defaultValue="fast_food" className="w-full">
              <TabsList className="last:bg-blue-900">
                <TabsTrigger value="fast_food">🍔 Fast food</TabsTrigger>
                <TabsTrigger value="fruits">🍓 Fruit Item</TabsTrigger>
                <TabsTrigger value="vegetable">🥦 Vegetable Item</TabsTrigger>
                <TabsTrigger className="mr-7" value="desserts">🍦 Desserts</TabsTrigger>
              </TabsList>
              {/* <FoodContent food={food} /> */}
              <TabsContent value="fast_food" className="flex gap-4">
                {
                    food.map((result) => (
                        (result.tag === 'fast_food') && <Card key={result.id} id={result.id} image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
                    ))
                }
              </TabsContent>
              <TabsContent value="fruits">
                {
                    food.map((result) => (
                        (result.tag === 'fruit') && <Card key={result.id} id={result.id} image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
                    ))
                }                
              </TabsContent>
              <TabsContent value="vegetable">
                {
                    food.map((result) => (
                        (result.tag === 'vegetable') && <Card key={result.id} id={result.id} image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
                    ))
                }                
              </TabsContent>
              <TabsContent value="desserts">
                {
                    food.map((result) => (
                        (result.tag === 'dessert') && <Card key={result.id} id={result.id} image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
                    ))
                }                
              </TabsContent>
            </Tabs>
      </div>
  )
}

export default foodlist