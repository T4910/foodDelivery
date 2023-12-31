'use client'
import { RadioGroup } from "@/components/ui/radio-group"
import Method from './method'

const payment_methods = [
    {name: "Paypal", src: "/images/cake.png", value: "paypal"},
    {name: "Master Card", src: "/images/cake.png", value: "master"},
    {name: "Visa Card", src: "/images/cake.png", value: "visa"},
]

const methods = () => {
  return (
    <div>
        <h1 className="mb-8 text-xl font-semibold">Payment method</h1>
        <RadioGroup defaultValue="paypal">
            {payment_methods.map((method) => {
                return <Method key={method.value} value={method.value} src={method.src}>{method.name}</Method>
            })}
        </RadioGroup>
    </div>
  )
}

export default methods