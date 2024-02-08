import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7.5px 40px;
`;

export const Logo = styled.h1`
  font-size: 24px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 666px;
  height: 36px;
  background-color: #f8f8f8;
  padding: 8.5px 20px;
  border-radius: 8px;
`;

export const SearchIcon = styled.img`
  width: 19px;
  height: 19px;
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 26px;
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 10px;
  &::placeholder {
    font-size: 14px;
    color: #a2a2a2;
  }
`;

export const LoginBTN = styled.button`
  background: none;
  border: none;
`;
