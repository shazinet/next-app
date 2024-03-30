import nextAuth from "next-auth";
import NextAuth from "next-auth/next";

const handler = NextAuth({});

export { handler as GET, handler as POST };
