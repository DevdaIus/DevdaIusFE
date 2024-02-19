import styled from "styled-components";
import theme from "../../style/theme";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ModalWrap = styled.div`
  width: 569px;
  height: 341px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  background-color: ${theme.colors.SubColor};
  width: 100%;
  height: 38.77px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 10px;
`;

export const YesBtn = styled.button`
  width: 227px;
  height: 49px;
  border-radius: 15px;
  background-color: ${theme.colors.MainColor};
  color: ${theme.colors.W};
  font-style: ${theme.fonts.S_Core_Dream};
  font-size: 13px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const NoBtn = styled.button`
  width: 227px;
  height: 49px;
  border: 1px solid ${theme.colors.MainColor};
  border-radius: 15px;
  background-color: ${theme.colors.SubColor};
  color: ${theme.colors.B};
  font-style: ${theme.fonts.S_Core_Dream};
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
`;

export const NodeText = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  font-family: ${theme.fonts.S_Core_Dream};
  font-weight: bold;
`;

export const NodeTextBox = styled.p`
  margin: 100px 50px 70px 50px;
`