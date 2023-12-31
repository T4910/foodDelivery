import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const authinput = ({type, id, placeholder, name}) => {
  return (
    <div className="mb-2">
      <Label htmlFor={id}>{name}</Label>
      <Input variant="login" type={type} id={id} placeholder={placeholder} />
    </div>
)
}

export default authinput