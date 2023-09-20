import React from "react";
import * as S from "./Header.style";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <S.Header>
      <S.HeaderTopArea>
        <Image
          src="/images/logo/web_text_logo.png"
          width={142}
          height={22}
          alt="text_logo"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
        <nav>
          <Link href="/login">
            <S.GrayNavText>로그인</S.GrayNavText>
          </Link>
          <Link href="/signup">
            <S.GrayNavText>회원가입</S.GrayNavText>
          </Link>
        </nav>
      </S.HeaderTopArea>
      <S.HeaderBottomArea>
        <nav>
          <Link href="/contest">
            <S.BlackNavText>대회</S.BlackNavText>
          </Link>
          <Link href="/">
            <S.BlackNavText>선수등록</S.BlackNavText>
          </Link>
          <Link href="/">
            <S.BlackNavText>공문서</S.BlackNavText>
          </Link>
          <Link href="/">
            <S.BlackNavText>통계</S.BlackNavText>
          </Link>
          <Link href="/">
            <S.BlackNavText>피드</S.BlackNavText>
          </Link>
        </nav>
        <div>
          <S.BlackText>직접 대회를 개최 해보세요!</S.BlackText>
          <S.RegisterNavButton>
            <Link href="/">대회 개최하기</Link>
          </S.RegisterNavButton>
        </div>
      </S.HeaderBottomArea>
    </S.Header>
  );
};

export default Header;