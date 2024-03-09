import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from 'next/image';
import Link from "next/link";
import Price from './price';
import { getCldImageUrl } from 'next-cloudinary';
  

const card = ({id, image, name, description, calories, price, last, route}) => {
    if(!!(!id) || !!(!image) || !!(!name) || !!(!description) || !!(!price) ) return null;

    const url = getCldImageUrl({
        width: 200,
        height: 200,
        src: `foodDeliveryImages/${image}`
    });      

    return (
        <Link className={`w-min ${last ? '!mr-7' : ''}`} href={`/view/${id}`}>
            <Card className={`${(route === '/results') ? 'w-48' : 'w-56'} h-full rounded-md flex flex-col`}>
                <Image 
                    className="w-full aspect-square object-cover rounded-t-md" 
                    src={url} alt={name} width={200} height={200} priority={true}
                />
                <div className="flex flex-col flex-grow mt-2">
                    <CardHeader>
                        <CardTitle>{name}</CardTitle>
                        <CardDescription
                            className=" overflow-hidden line-clamp-2 text-overflow-ellipsis w-48"
                        >{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-red-600">🔥 {calories} calories</p>
                    </CardContent>
                    <CardFooter>
                        <Price price={price} />
                    </CardFooter>
                </div>
            </Card>
        </Link>
    );
};
  
export default card;