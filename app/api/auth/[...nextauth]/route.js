import NextAuth from "next-auth"
import { compare } from "bcryptjs"
import { PrismaAdapter } from "@auth/db-adapter"
// import { dbClient } from "@db/client"
// import EmailProvider from "next-auth/providers/email";
import Crendentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { db } from "@/lib/db"

// const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.JWT_SECRET,
    session: {strategy: 'jwt'},
    callbacks:{
      async session({session, token}){
        session.user = {id: token.sub}
        return session
      }
    },
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      }),
      Crendentials({
        async authorize(credentials){
          let user = await db.user.findFirst({where: {email: credentials.email}}) || await db.user.findFirst({where: {username: credentials.email}})
  
          if(!user) return null
          let similarPassword = await compare(credentials.password, user.password)        
          
          return similarPassword ? user : null
        }
      })
    ]
}
  
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }