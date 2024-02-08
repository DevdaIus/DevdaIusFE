import React from "react";
import * as S from "./Header.style";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo>Devdalus</S.Logo>
      <S.SearchBox>
        <S.SearchIcon />
        <S.SearchInput placeholder="검색" />
      </S.SearchBox>
      <S.LoginBTN>로그인</S.LoginBTN>
    </S.HeaderContainer>
  );
}
