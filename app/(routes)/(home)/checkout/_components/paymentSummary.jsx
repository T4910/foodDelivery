import { Button } from "@/components/ui/button"
import Details from "@/app/(routes)/(home)/checkout/_components/paymentDetails"

const actions = ({ items }) => {

    return (
        <div className="text-xl font-middle p-8 py-10 bg-white flex flex-col space-y-5">
            <Details items={items}/>
            {/* Padding problem with confirm button */}
            <Button className="w-full py-6 fond-semibold text-xl">Confirm</Button>
        </div>
    );
}

export default actions