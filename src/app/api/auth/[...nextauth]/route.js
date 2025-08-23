import loginUser from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Your email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = await loginUser(credentials)
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],

    callbacks: {
 
        async session({ session, token, user }) {
            if(token){
                session.user.username=token.username
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if(user){
                token.username=user.name
            }
            return token
        }
    },

    pages: {
        signIn: '/login',
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }