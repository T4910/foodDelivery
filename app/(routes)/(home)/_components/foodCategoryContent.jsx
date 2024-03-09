import Display from "./foodCategoryContentDisplay"
import { db } from "@/lib/db"
import { TabsContent } from "@/components/ui/tabs"


const foodCategoryContent = async ({ category }) => {
    const initialFoodDisplayed = 3;
    const totalNumberOffood = await db.food.count({where: { tag: { has: category }}});
    const food = await db.food.findMany(
        {
            take: initialFoodDisplayed,
            where: { tag: { has: category } }
        }
    );

    return (
        <TabsContent value={category} className="flex space-x-4 flex-grow">
            <Display category={category} food={food} totalFood={totalNumberOffood}/>
        </TabsContent>
    );
}

export default foodCategoryContent;