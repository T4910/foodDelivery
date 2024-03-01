import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Password = ( field ) => {
    console.log("Password.jsx: ", field)
    const [ show, setShow ] = useState(false);

    return (
        <div className="flex relative">
            <Input 
                {...field}
                className="placeholder:text-muted focus-visible:outline-black px-3" 
                type={ show ? "text" : "password" } 
                placeholder="********"
                variant="login" 
            /> 
            <Button 
                className="absolute right-0 text-muted-foreground"
                onClick={() => setShow(!show)}
                variant="ghost"
                type="button"
            >
                { show ? <FaRegEyeSlash /> : <FaRegEye /> }
            </Button>
        </div>
    );
};

export default Password;