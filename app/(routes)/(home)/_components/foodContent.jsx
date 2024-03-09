import Card from "./foodcard"
import { TabsContent } from "@/components/ui/tabs"
import CategoryContent from "./foodCategoryContent"

const foodContent = ({ list }) => {
    return (
        <>
            {
                list.map((category, index) => <CategoryContent 
                    category={category} 
                    key={index}
                />)
            }
        </>
    )
}

export default foodContent