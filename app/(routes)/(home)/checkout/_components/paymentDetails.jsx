import Price from "@/app/(routes)/(home)/_components/price"
import CalculatedFee from "@/app/(routes)/(home)/checkout/_components/CalculatedFee";

const paymentDetails = ({ items }) => {
    const deliveryPrice = 20.00;

    return (
        <div>
            <div className="flex justify-between mb-2">
                    <div>Items ({items.length})</div>
                    <Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0)} />
                </div>
                <div className="flex justify-between mb-2">
                    <div>Delivery Fee</div>
                    <CalculatedFee />
                </div>
                <div className="flex justify-between mb-2">
                    <div>Total Price</div>
                    <CalculatedFee price={items.reduce((acc, item) => acc + parseFloat(item.price), 0)} />
                </div>
        </div>
     )
}
export default paymentDetails