"use server"
import bcrypt  from 'bcryptjs'
import { db } from "@/lib/db"
import { RegisterSchema } from "@/middleware/schema";
import { getUserByID, getUserByEmail } from "@/lib/getInfo" 


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