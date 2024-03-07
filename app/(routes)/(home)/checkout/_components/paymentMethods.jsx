'use client'
import { RadioGroup } from "@/components/ui/radio-group"
import Method from './paymentMethod'

const payment_methods = [
    {name: "Paypal", src: "/images/paypal.svg", value: "paypal"},
    {name: "Master Card", src: "/images/mastercard.svg", value: "master"},
    {name: "Visa Card", src: "/images/visa.svg", value: "visa"},
]

const methods = () => {
  return (
    <div className="bg-white bg-opacity-65 p-8 flex-grow flex flex-col">
        <h1 className="mb-4 text-xl font-semibold">Payment method</h1>
        <RadioGroup className="flex-grow" defaultValue="paypal">
            {payment_methods.map((method) => {
                return <Method key={method.value} value={method.value} src={method.src}>{method.name}</Method>
            })}
        </RadioGroup>
    </div>
  )
}

export default methods