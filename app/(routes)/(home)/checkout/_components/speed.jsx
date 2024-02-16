import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const speed = () => {
  return (
    <div className="mb-8 bg-white rounded-md">
        <Select>
            <div className="flex justify-between p-4">
                <div>
                    <h1 className="block text-xl font-medium">Delivery Method</h1>
                    <SelectValue className="text-muted-foreground" placeholder="Select Delivery..." />
                </div>
                <SelectTrigger className="w-10 bg-yellow-500 text-white fond-bold h-14"></SelectTrigger>
            </div>
            <SelectContent >
                <SelectItem value="normal">Standard Delivery (17-20 min)</SelectItem>
                <SelectItem value="max">Fast Delivery (8-10min)</SelectItem>
                <SelectItem value="slow">Take your time (20-30 min)</SelectItem>
            </SelectContent>
        </Select>
    </div>
)
}

export default speed