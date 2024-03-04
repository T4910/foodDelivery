import Card from "./foodcard"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

let food = [
    {tag: 'fast_food', id: '1', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
    {tag: 'fast_food', id: '32', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
    {tag: 'fast_food', id: '100', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.89'},
    {tag: 'fruit', id: '2', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
    {tag: 'vegetable', id: '3', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
    {tag: 'dessert', id: '4', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
]


const foodlist = () => {
  return (
        <div className="flex-grow mt-2">
            <Tabs defaultValue="fast_food" className="w-full h-full flex flex-col">
              <TabsList className="my-4">
                <TabsTrigger value="fast_food">🍔 Fast food</TabsTrigger>
                <TabsTrigger value="fruits">🍓 Fruit Item</TabsTrigger>
                <TabsTrigger value="vegetable">🥦 Vegetable Item</TabsTrigger>
                <TabsTrigger className="mr-7" value="desserts">🍦 Desserts</TabsTrigger>
              </TabsList>
              {/* <FoodContent food={food} /> */}
              <TabsContent value="fast_food" className="flex space-x-4 flex-grow">
                {
                    food.filter((result) => result.tag === 'fast_food').map((result, index, array) => (
                        <Card 
                          last={(array.length-1 === index)} // attaches a margin to the right to the last element card
                          key={result.id} 
                          id={result.id} 
                          image={result.image} 
                          name={result.name} 
                          description={result.description} 
                          calories={result.calories} 
                          price={result.price}/>
                    ))
                }
              </TabsContent>
              <TabsContent value="fruits" className="flex gap-4">
                {
                    food.map((result) => (
                        (result.tag === 'fruit') && <Card 
                          className="last:mr-7"
                          key={result.id} 
                          id={result.id} 
                          image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
                    ))
                }                
              </TabsContent>
              <TabsContent value="vegetable" className="flex gap-4">
                {
                    food.map((result) => (
                        (result.tag === 'vegetable') && <Card 
                          className="last:mr-7"
                          key={result.id} 
                          id={result.id} 
                          image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
                    ))
                }                
              </TabsContent>
              <TabsContent value="desserts" className="flex gap-4">
                {
                    food.map((result) => (
                        (result.tag === 'dessert') && <Card 
                          className="last:mr-7"
                          key={result.id} 
                          id={result.id} 
                          image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
                    ))
                }                
              </TabsContent>
            </Tabs>
      </div>
  )
}

export default foodlist