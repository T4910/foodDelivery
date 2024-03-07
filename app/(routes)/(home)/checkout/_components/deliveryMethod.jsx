import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ChevronDown, ChevronUp } from "lucide-react"

  
const speed = () => {
  return (
    <div className="bg-white rounded-md">
        <Select>
            <div className="flex justify-between p-4 px-5">
                <div>
                    <h1 className="block text-lg font-medium">Delivery method</h1>
                    <div className="text-muted-foreground">
                        <SelectValue placeholder="Select Delivery..." />
                    </div>
                </div>
                <SelectTrigger primitiveIcon={false} className="w-10 bg-primary text-white fond-bold h-14 px-2">
                    <ChevronDown className="size-16 font-extrabold" />
                </SelectTrigger>
            </div>
            <SelectContent className="right-5 top-1 w-72">
                <div>
                    <SelectItem className="text-lg" value="normal">Standard Delivery (17-20 min)</SelectItem>
                    <SelectItem className="text-lg" value="max">Fast Delivery (8-10min)</SelectItem>
                    <SelectItem className="text-lg" value="slow">Take your time (20-30 min)</SelectItem>
                </div>
            </SelectContent>
        </Select>
    </div>
)
}

export default speed