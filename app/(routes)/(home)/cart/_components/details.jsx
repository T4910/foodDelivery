import Price from "../../_components/price"

const details = ({ items }) => {
    const deliveryPrice = {
        slow: 5,
        medium: 10,
        fast: 20
    }

    return (
        <div>
            <div className="flex justify-between mb-2">
                <div>Items ({items.length})</div>
                <div><Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0)} /></div>
            </div>
            <div className="flex justify-between mb-2">
                <div>Total Price + Delivery</div>
                <div><Price price={items.reduce((acc, item) => acc + parseFloat(item.price), 0) + deliveryPrice.medium} /></div>
            </div>
        </div>
    )
}
export default details