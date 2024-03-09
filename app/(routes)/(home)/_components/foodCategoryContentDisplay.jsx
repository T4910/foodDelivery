'use client'
import Card from "./foodcard"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const foodCategoryContentDisplay = ({ food: fetchedFood, category, totalFood }) => {
    const [food, setFood] = useState(fetchedFood);
    const foodDisplayedPerLoad = 3;

    async function addMoreFood(){
        const data = await fetch('api/food', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                take: foodDisplayedPerLoad,
                skip: food.length,
                where: { tag: { has: category } }
            })
        });
        const newFood = await data.json();
        setFood((foodArray) => [...foodArray, ...newFood]);
    }

    return (
        <>
            {
                food.filter((result) => result.tag.includes(category)).map((result, index, array) => (
                    <Card 
                        last={(array.length-1 === index && food.length >= totalFood)} // attaches a margin to the right to the last element card
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
            {(food.length < totalFood) ? <Button 
                className="h-full !mr-7"
                type="submit" 
                onClick={addMoreFood}
            >Add more</Button> : null}
        </>
    );
};

export default foodCategoryContentDisplay;