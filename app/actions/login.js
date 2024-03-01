import { LoginSchema } from "@/middleware/schema"
import { DEFAULT_LOGIN_REDIRECT } from "@/middleware/routes"
import { signIn } from "@/app/api/auth"

export const login = async (form) => {
    const {data: {email, password}, success} = LoginSchema.safeParse(form)

    if(!success) return { status: "error", message: "Invalid fields" };

    try{
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (e) {

    }
}
