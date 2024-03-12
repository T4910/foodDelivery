"use server"

import { LoginSchema } from "@/middleware/schema"
import { DEFAULT_LOGIN_REDIRECT } from "@/middleware/route"
import { signIn } from "@/middleware/auth"
import { AuthError } from "next-auth"
import bcrypt  from 'bcryptjs'
import { db } from "@/lib/db"
import { RegisterSchema } from "@/middleware/schema";
import { getUserByID, getUserByEmail } from "@/lib/getInfo" 

export const login = async (form) => {
    const {data: {email, password}, success} = LoginSchema.safeParse(form)

    if(!success) return { status: "error", message: "Invalid fields" };

    try{
        console.log('activationg next-auth signing', email, password)
        const isSignInSuccessful = await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
        console.log('next-auth signin funcittno was successfull',isSignInSuccessful)
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

export const register = async (form) => {
    console.log('server reg...')
    const {data : {email, password, cpassword}, success} = RegisterSchema.safeParse(form);
    
    if(!success) return { status: "error", message: "Invalid fields!" };
    
    if(password !== cpassword) return { status: "error", message: "Password doesn't match" };
    
    const existingUser = await getUserByEmail(email);
    
    if(existingUser) return { status: "error", message: "User already exists" };
    
    let user;
    
    try{
        user = await db.user.create({
            data: { 
                email, 
                password: await bcrypt.hash(password, 10)
            }
        });
    } catch(e) {
        console.log(e);
        return { status: "error", message: "Server Error" };
    }
    
    console.log('created user');
    console.log(user);

    return { status: "success", message: "Successful!" };
}
