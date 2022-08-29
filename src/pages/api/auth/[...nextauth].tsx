import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb";
import dbConnect from "../../../../lib/dbConnect";

export default NextAuth({
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET  || '',
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      }
    })
    
  ],
  
  debug: process.env.NODE_ENV === 'development',
  adapter: MongoDBAdapter(clientPromise),

  

  secret: process.env.NEXTAUTH_SECRET,
})
