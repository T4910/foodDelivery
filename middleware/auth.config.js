import bcyrpt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"
import { db } from "@/lib/db"
import { LoginSchema } from "@/middleware/schema";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserByEmail } from "@/lib/getInfo";

export default {
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    providers: [
        Credentials({
            async authorize(credentials){
                const checkedFields = LoginSchema.safeParse(credentials);
                if(!checkedFields.success) return null;

                const { email, password } = checkedFields.data;

                const user = await getUserByEmail(email);
                if(!user || !user.password) null
                
                const passwordMatch = await bcyrpt.compare(password, user.password);
                if(passwordMatch) return user;

                return null;
            }
        })
    ]
};
