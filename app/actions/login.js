"use server"

import { LoginSchema } from "@/middleware/schema"
import { DEFAULT_LOGIN_REDIRECT } from "@/middleware/route"
import { signIn } from "@/middleware/auth"
import { AuthError } from "next-auth"

const login = async (form) => {
    console.log('server TALKING... from server actions')
    const {data: {email, password}, success} = LoginSchema.safeParse(form)

    if(!success) return { status: "error", message: "Invalid fields" };

    try{
        const isSignInSuccessful = await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
        console.log('t',isSignInSuccessful)
        return { status: "successful", message: "Login..." }
    } catch (e) {
        if (e instanceof AuthError){
            switch (e.type) {
                case "CredentialsSignin":
                    return {status: "error", message: "Invalid credentials!"}
                default:
                    return { status: "error", message: "Something went wrong!"}
                }
            }
            
            throw e;
        }
}

export default login;