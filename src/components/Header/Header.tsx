import React from "react";
import * as S from "./Header.style";
import logo from "../../assets/header_logo.svg";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo src={logo} />
      <S.SearchBox>
        <S.SearchIcon />
        <S.SearchInput placeholder="검색" />
      </S.SearchBox>
      <S.LoginBTN>로그인</S.LoginBTN>
    </S.HeaderContainer>
  );
}
