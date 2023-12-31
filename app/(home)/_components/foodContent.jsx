import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

//   let food = [
//     {tag: 'fast_food', id: '1', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
//     {tag: 'fruit', id: '2', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
//     {tag: 'vegetable', id: '3', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
//     {tag: 'dessert', id: '4', image: '/images/macaroni.jpg', name: 'Egg pasta', description: 'Spicy cherry cappi', calories: '63', price: '9.80'},
// ]


const foodContent = ({ food }) => {
    return (
        {
            // food.map((result) => (
            //     <TabsContent value="fast_food" className="flex gap-4">
            //         {
            //             food.map((result) => (
            //                 (result.tag === 'fast_food') && <Card key={result.id} id={result.id} image={result.image} name={result.name} description={result.description} calories={result.calories} price={result.price}/>
            //             ))
            //         }
            //     </TabsContent>  

            // ))
        }
    )
}

export default foodContent