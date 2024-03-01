"use client"
import Link from "next/link"
import Fields from "./loginFields"
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/middleware/schema"


const LoginForm = () => {
    const [flash, setFlash] = useState({});

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "taiwo.emmanuel@lmu.edu.ng",
            password: "a",
        }
    });

    const login = (values) => {
        console.log('Login values: ', values);

        setFlash({
            status: "success",
            message: "Form was successful-ish"
        });
    }

    return (
        <Form {...form} >
            <form 
                className="flex flex-col h-full"
                onSubmit={form.handleSubmit(login)}
            >
                <div className="flex-grow">
                    <Fields {...form} flash={[flash, setFlash]}/>                    
                </div>
                <div className="h-fit">
                    <Link href="#" className="text-end block mb-6 text-sm text-red-600">Forgot Password?</Link>
                    <Button type="submit" className="w-full font-bold p-6 rounded-xl">Login</Button>
                    <Link className="block text-center my-3" href="/signup">Don't have an account? Create one</Link>
                </div>
            </form>
        </Form>
    );
};

export default LoginForm;