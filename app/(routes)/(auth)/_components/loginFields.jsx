import Flash from "./formError";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { 
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";
// import PasswordField from "./password"



const loginFields = ({ flash: [flash], ...form}) => {
    const [ show, setShow ] = useState(false)

    return (
        <div className="flex flex-col justify-around h-full pb-6">
            <Flash state={flash}/>
            <FormField   
                control={form.control}
                name="email"
                render = {({ field }) => (
                    <FormItem>
                        <FormLabel className="text-muted-foreground text-xs font-semibold">Email</FormLabel>
                        <FormControl>
                            <Input 
                                {...field}
                                placeholder="example@example.com"
                                type="email"
                                className="placeholder:text-muted m-0 px-3" 
                                variant="login"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="password"
                render = {({ field }) => (
                    <FormItem>
                        <FormLabel className="text-muted-foreground text-xs font-semibold">Password</FormLabel>
                        <FormControl>
                            {/*
                                FOR some unknown reason, the password field doesn't work 
                                when I import it: <PasswordField {...field}/> 
                            */}
                            
                            <div className="flex relative">
                                <Input 
                                    {...field}
                                    className="placeholder:text-muted focus-visible:outline-black px-3" 
                                    type={ show ? "text" : "password" } 
                                    placeholder="*******"
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
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default loginFields;