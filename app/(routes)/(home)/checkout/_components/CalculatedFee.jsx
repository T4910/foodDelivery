'use client'
import Price from "../../_components/price"
import { useContext } from "react"
import { PaymentContext } from "./paymentStateContext"

const deliveryPrice = {
    slow: 5.00,
    normal: 10.00,
    fast: 20.00
};

const CalculatedFee = ({ price }) => {
    const { deliverySpeed } = useContext(PaymentContext);

    const totalPrice = isNaN(price) ? 0 : price;
    const deliveryfee = deliveryPrice[deliverySpeed] ?? 0;

    // In order for price to show --.-- when user hasn't selected delivery method. 
    // Price component needs to recieve a value of undefined. 
    // This should only occur when only displaying delivery fee. 
    // The argument price is undefined when the displaying delivery fee only
    const displayPrice = (price === undefined) ? deliveryPrice[deliverySpeed] : totalPrice + deliveryfee;

    return (
        <Price price={displayPrice} />
    )
}
export default CalculatedFee