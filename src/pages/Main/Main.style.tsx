import styled from "styled-components";

export const Wrap = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.h2``;
export const Desc = styled.p`
  font-size: 15px;
  color: #505b8c;
`;
export const TitleForm = styled.form`
  display: flex;
  gap: 10px;
`;
export const TitleInput = styled.input`
  width: 438px;
  height: 25px;
  border: 2px solid #687aa5;
  border-radius: 50px;
  padding: 14.5px 20px;
  &::placeholder {
    font-size: 14px;
    color: #a2a2a2;
  }
`;
export const TitleBTN = styled.button`
  width: 102px;
  height: 55px;
  color: #fff;
  background-color: #6f7cb2;
  border: none;
  border-radius: 50px;
`;
