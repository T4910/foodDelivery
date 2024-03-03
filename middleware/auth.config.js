import Credentials from "next-auth/providers/credentials"
import bcyrpt from "bcryptjs"
import { LoginSchema } from "@/middleware/schema";
import { getUserByEmail } from "@/lib/getInfo";

export default {
    providers: [
        Credentials({
            async authorize(credentials){
                const checkedFields = LoginSchema.safeParse(credentials);
                if(!checkedFields.success) return null;

                const { email, password } = checkedFields.data;

                const user = await getUserByEmail(email);
                if(!user || !user.password) null
                
                const passwordMatch = await bcyrpt.compare(password, user.password);
                console.log(passwordMatch)
                if(passwordMatch) return user;

                return null;
            }
        })
    ]
};
