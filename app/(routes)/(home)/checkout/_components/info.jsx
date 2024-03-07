import DeliverySpeed from './deliveryMethod'
import Address from './address'

const info = () => {
    return (
        <div className="space-y-3 pb-8 px-8">
            <DeliverySpeed />
            <Address />
        </div>
    )
}

export default info