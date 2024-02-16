'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Password = () => {
    const [ show, setShow ] = useState(false);
    return (
        <div className="flex relative">
            <Input 
                className="placeholder:text-muted focus-visible:outline-black" 
                variant="login" type={ show ? "text" : "password" } id="password" placeholder="Enter your password" name="password"
            /> 
            <Button 
                variant="ghost"
                onClick={() => setShow(!show)}
                type="button"
                className="absolute right-0 text-muted-foreground"
            >{ show ? "(%)" : "(O)" }</Button>
        </div>
    );
};

export default Password;