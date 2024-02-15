import styled from "styled-components";
import theme from "./../../style/theme";
import { CloseOutlined } from "@ant-design/icons";

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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.SubColor};
  width: 100%;
  height: 38.77px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 10px;
`;

export const QuesAddTitle = styled.p`
  font-style: ${theme.fonts.S_Core_Dream};
  color: ${theme.colors.G4};
  font-size: 13px;
  margin-left: 230px;
  margin-right: 230px;
`;

export const CloseBtn = styled(CloseOutlined)`
  cursor: pointer;
  color: ${theme.colors.G4};
  float: right;
`;

export const QuesInput = styled.textarea`
  width: 482px;
  height: 184px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  background: ${theme.colors.G1};
  color: ${theme.colors.G4};
  border: 1px solid ${theme.colors.G2};
  box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
  font-style: ${theme.fonts.S_Core_Dream};
  font-size: 13px;
  outline: none;
  padding-left: 10px;
  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out;
  resize: none;

  &::placeholder {
    color: ${theme.colors.G4};
    font-style: ${theme.fonts.S_Core_Dream};
    font-size: 13px;
  }

  &:hover {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
  }

  &:focus {
    color: #4b515d;
    border: 1px solid #b8b6b6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ConfirmBtn = styled.button`
  width: 482px;
  height: 49px;
  border-radius: 15px;
  background-color: ${theme.colors.MainColor};
  color: ${theme.colors.W};
  font-style: ${theme.fonts.S_Core_Dream};
  font-size: 13px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
