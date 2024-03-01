"use client"

import Link from "next/link"
import Fields from "./signupFields"
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { register } from "@/app/actions/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/middleware/schema"


const SignupForm = () => {
    const flash = useState({});
    
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "taiwo.emmanuel@lmu.edu.ng",
            password: "a",
            cpassword: "a"
        }
    });

    const startRegister = async (values) => {
        console.log('reg....', form.formState.isSubmitting)
        const response = await register(values);

        flash[1](response); // flash[1] --> setFlash
    };

    return (
        <Form {...form} >
            <form 
                className="flex flex-col h-full"
                onSubmit={form.handleSubmit(startRegister)}
            >
                <div className="flex-grow">
                    <Fields {...form} flash={flash}/>
                </div>
                <div>
                    <Button type="submit" className="w-full font-bold p-6 rounded-xl">Sign up</Button>
                    <Link className="block text-center my-3" href="/login">Already have an account? Sign in</Link>
                </div>
            </form>
        </Form>
    );
};

export default SignupForm;