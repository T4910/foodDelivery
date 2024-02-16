import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PasswordField from "./password"

const loginFields = () => {
  return (
    <div className="flex flex-col justify-around h-full pb-6">
        <div className="mb-2">
            <Label htmlFor="email" className="text-muted-foreground text-xs font-semibold">Email Address</Label>
            <Input 
	  	        className="placeholder:text-muted" 
	  	        variant="login" type="email" id="email" placeholder="Enter your Email" name="Email Address"
	          /> 
        </div>
        <div className="mb-2">
            <Label htmlFor="password" className="text-muted-foreground text-xs font-semibold">Password</Label>
            <PasswordField />
        </div>
    </div>
  )
}

export default loginFields
