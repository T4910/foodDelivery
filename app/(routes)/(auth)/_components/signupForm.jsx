"use client"

import Link from "next/link"
import Fields from "./signupFields"
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/middleware/schema"
import { login, register }  from "@/app/actions/auth";


const SignupForm = () => {
    const flash = useState({});
    const [ isLoading, setLoading ] = useState(false)
    
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "taiwo.emmanuel@lmu.edu.ng",
            password: "a",
            cpassword: "a"
        }
    });

    const startRegister = async (values) => {
        setLoading(true);
        console.log('reg....', form.formState.isSubmitting)
        let response = await register(values);

        console.log('response', response)
        if(response.status === 'success') {
            response = await login(values);
        } else {
            setLoading(false);
            flash[1](response); // flash[1] --> setFlash
        }
    };

    return (
        <Form {...form} >
            <form 
                className="flex flex-col h-full"
                onSubmit={form.handleSubmit(startRegister)}
            >
                <div className="flex-grow">
                    <Fields {...form} flash={flash} isLoading={isLoading}/>
                </div>
                <div>
                    <Button 
                        type="submit" 
                        className="w-full font-bold p-6 rounded-xl"
                        disabled={isLoading}
                    >Sign up</Button>
                    <Link className="block text-center my-3" href="/login">Already have an account? Sign in</Link>
                </div>
            </form>
        </Form>
    );
};

export default SignupForm;