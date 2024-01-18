import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", // 수정!!!!
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", // 수정!!!!
    }),
    KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID!,
        clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      }),
  ],
  pages: {
    signIn: "/signin",
  },
});

export default handler;