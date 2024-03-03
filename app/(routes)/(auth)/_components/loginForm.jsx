"use client"
import Link from "next/link"
import Fields from "./loginFields"
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/middleware/schema"
import login from "@/app/actions/login"


const LoginForm = () => {
    const [flash, setFlash] = useState({});
    const [isLoading, setLoading] = useState(false);

    const {formState: { isSubmitting }, ...form} = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "taiwo.emmanuel@lmu.edu.ng",
            password: "a",
        }
    });

    const onSubmit = async (values) => {
        console.log('onSubmit values: ', values);
        let res;

        try{
            console.log('trying to login in now... from client form on line 29');
            setLoading(true);
            res = await login(values);
        } catch(e){
            console.log('An error occured in 31:', e);
        }

        console.log("server action login response: ", res)
        setFlash(res);
        setLoading(() => {
            if(!!res == null) return true;
        });
    }

    return (
        <Form {...form} >
            <form 
                className="flex flex-col h-full"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="flex-grow">
                    <Fields {...form} flash={[flash, setFlash]} isSubmitting={(isSubmitting && isLoading)}/>                    
                </div>
                <div className="h-fit">
                    <Link href="#" className="text-end block mb-6 text-sm text-red-600">Forgot Password?</Link>
                    <Button type="submit" className="w-full font-bold p-6 rounded-xl" disabled={(isSubmitting && isLoading)}>{(isSubmitting && isLoading) ? "..." : "Login"}</Button>
                    <Link className="block text-center my-3" href="/signup">Don't have an account? Create one</Link>
                </div>
            </form>
        </Form>
    );
};

export default LoginForm;