import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import Card from "./foodcard"

const foodContent = ({ food, list }) => {
    return (
        <>
            {
                list.map((category, index) => (
                    <TabsContent value={category} key={index} className="flex space-x-4 flex-grow">
                        {
                            food.filter((result) => result.tag.includes(category)).map((result, index, array) => (
                                <Card 
                                    last={(array.length-1 === index)} // attaches a margin to the right to the last element card
                                    key={result.id} 
                                    id={result.id} 
                                    image={result.image} 
                                    name={result.name} 
                                    description={result.description} 
                                    calories={result.calories} 
                                    price={result.price}
                                />
                            ))
                        }
                    </TabsContent> 
                ))
            }
        </>
    )
}

export default foodContent