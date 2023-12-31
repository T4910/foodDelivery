import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import Link from "next/link"
import Price from './price'
  

const card = ({id, image, name, description, calories, price}) => {
    return (
        <Link className="w-min" href={`/view/${id}`}>
            <Card className="w-48 rounded-md">
                <Image className="w-full aspect-square object-cover rounded-t-md" src={image} alt={name} width={200} height={200} />
                <CardHeader className="pb-3">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}i</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                    <p className="text-sm text-red-600">🔥 {calories} calories</p>
                </CardContent>
                <CardFooter>
                    <Price price={price} />
                </CardFooter>
            </Card>
        </Link>
    )
}
  
export default card