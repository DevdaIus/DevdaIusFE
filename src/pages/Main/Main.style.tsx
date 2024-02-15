import styled from "styled-components";
import mainbg from "../../assets/mainbg.svg";

export const Wrap = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${mainbg});
  width: 1240px;
  height: 682px;
  margin: 0 auto;
  margin-top: 136px;
  margin-bottom: 136px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;
export const Desc = styled.p`
  font-size: 15px;
  color: #505b8c;
  margin-bottom: 45px;
`;
export const TitleForm = styled.form`
  display: flex;
  gap: 10px;
`;
export const TitleInput = styled.input`
  width: 438px;
  height: 55px;
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
