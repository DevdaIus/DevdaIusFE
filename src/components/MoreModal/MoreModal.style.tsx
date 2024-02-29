import styled from "styled-components";
import theme from "./../../style/theme";
import { CheckCircleOutlined, CloseOutlined, CopyOutlined, FormOutlined } from "@ant-design/icons";

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
  width: 779px;
  height: 489px;
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
  margin-left: 340px;
  margin-right: 340px;
`;

export const CloseBtn = styled(CloseOutlined)`
  cursor: pointer;
  color: ${theme.colors.G4};
`;

export const AnsInput = styled.textarea`
  width: 590px;
  height: 123px;
  margin-bottom: 10px;
  padding: 10px;
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

export const QuesInput = styled.textarea`
  width: 675px;
  height: 123px;
  margin-bottom: 10px;
  padding: 10px;
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
  width: 75px;
  height: 123px;
  border-radius: 15px;
  background-color: ${theme.colors.MainColor};
  color: ${theme.colors.W};
  font-style: ${theme.fonts.S_Core_Dream};
  font-size: 13px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
`;

export const QAText = styled.text`
  font-style: ${theme.fonts.S_Core_Dream};
  color: ${theme.colors.MainColor};
  font-weight: bold;
  margin-right: 10px;
`;

export const QuesBox = styled.div`
  width: 675px;
  height: 123px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 15px;
  background: ${theme.colors.G1};
  color: ${theme.colors.G4};
  border: 1px solid ${theme.colors.G2};
  box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
  font-style: ${theme.fonts.S_Core_Dream};
  font-size: 13px;
  text-align: left;
`

export const QuesAnsWrap = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const QuesWrap = styled.div`
  display: flex;
  margin-top: 150px;
`;

export const AnsWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const EditBtn = styled(FormOutlined)`
  cursor: pointer;
  color: ${theme.colors.B};
  margin-right: 7px;
`;

export const CopyBtn = styled(CopyOutlined)`
  cursor: pointer;
  color: ${theme.colors.B};
`;

export const BtnWrap = styled.div`
  display: flex;
  position: absolute;
  right: 14px;
  bottom: 160px;
`;

export const SaveBtn = styled(CheckCircleOutlined)`
  cursor: pointer;
  color: ${theme.colors.B};
  margin-right: 7px;
`;

export const CancelBtn = styled(CloseOutlined)`
  cursor: pointer;
  color: ${theme.colors.B};
`;