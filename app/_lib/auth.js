import Google from "next-auth/providers/google"
import NextAuth from "next-auth";

const authConfig={
    providers:[
        Google({
            clientId:process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET,
        })
    ],
    callbacks:{
        authorized({auth,request}){
            return !!auth?.user
        },
    },
    pages:{
        signIn:"/login"
        },
    }

export const {
    auth,
    signIn,
    signOut,
    handlers:{GET,POST}}
    =NextAuth(authConfig)