import Flash from "./formError"; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { 
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";


// import PasswordField from "./password";

const signUpFields = ({flash: [flash], isLoading, ...form}) => {
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

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
                                disabled={isLoading}
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
                            <div className="flex relative">
                                <Input 
                                    {...field}
                                    className="placeholder:text-muted focus-visible:outline-black px-3" 
                                    type={ showPassword ? "text" : "password" } 
                                    placeholder="*******"
                                    variant="login"
                                    disabled={isLoading} 
                                /> 
                                <Button 
                                    className="absolute right-0 text-muted-foreground"
                                    onClick={() => setShowPassword(!showPassword)}
                                    variant="ghost"
                                    disabled={isLoading}
                                    type="button"
                                >
                                    { showPassword ? <FaRegEyeSlash /> : <FaRegEye /> }
                                </Button>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="cpassword"
                render = {({ field }) => (
                    <FormItem>
                        <FormLabel className="text-muted-foreground text-xs font-semibold">Confirm Password</FormLabel>
                        <FormControl>
                            <div className="flex relative">
                                <Input 
                                    {...field}
                                    className="placeholder:text-muted focus-visible:outline-black px-3" 
                                    type={ showConfirmPassword ? "text" : "password" } 
                                    placeholder="*******"
                                    variant="login"
                                    disabled={isLoading} 
                                /> 
                                <Button 
                                    className="absolute right-0 text-muted-foreground"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    variant="ghost"
                                    disabled={isLoading}
                                    type="button"
                                >
                                    { showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye /> }
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

export default signUpFields;
