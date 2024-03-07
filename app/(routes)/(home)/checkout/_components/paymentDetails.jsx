import Price from "../../_components/price"

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
                    <Price price={deliveryPrice} />
                </div>
                <div className="flex justify-between mb-2">
                    <div>Total Price</div>
                    <Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0) + deliveryPrice} />
                </div>
        </div>
     )
}
export default paymentDetails