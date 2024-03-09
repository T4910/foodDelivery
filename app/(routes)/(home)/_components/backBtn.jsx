'use client'
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react';
import { cn } from  "@/lib/utils"
import { useRouter } from "next/navigation";

const backBtn = ({ className, iconStyle }) => {
    const router = useRouter();

    return (
        <Button 
            onClick={() => router.back()}
            className={cn("", className)}
        >
            <ChevronLeft className={cn("size-16", iconStyle)} />
        </Button>
    )
}
export default backBtn