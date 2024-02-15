import React from "react";
import * as S from "./Main.style";
import logo from "../../assets/main_logo.svg";

export default function Main() {
  return (
    <S.Wrap>
      <S.MainContainer>
        <S.Logo src={logo} />
        <S.Desc>
          끊임 없이 이어지는 질문에 답변하여 자신의 질문맵을 만들어 보세요.
        </S.Desc>
        <S.TitleForm>
          <S.TitleInput placeholder="주제를 입력해주세요." />
          <S.TitleBTN>확인</S.TitleBTN>
        </S.TitleForm>
      </S.MainContainer>
    </S.Wrap>
  );
}
