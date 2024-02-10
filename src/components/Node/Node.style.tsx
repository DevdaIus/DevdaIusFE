import styled from "styled-components";
import theme from './../../style/theme';
import { PlusCircleOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
`;

export const NodeAndAddBtnWrapper = styled.div`
  display: flex;
`;

export const NodeBox = styled.div`
  width: 163px;
  height: 47px;
  border-radius: 50px;
  border: 2px solid ${theme.colors.MainColor};
  display : flex;
	justify-content : center;
	align-items : center;
  background-color: #E9F1F9;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.23);
  font-family: ${theme.fonts.S_Core_Dream};
  font-weight: bold;
  cursor: pointer;
`;

export const DetailBtn = styled.button`
  font-weight: bold;
  color: ${theme.colors.MainColorB};
  background-color: transparent;
  opacity: 0; /* 초기에는 숨겨진 상태로 설정 */
  transition: opacity 0.3s ease;

  &.show {
    opacity: 1; /* show 클래스가 추가되었을 때 나타남 */
  }
`;

export const NodeAddBtn = styled(PlusCircleOutlined)`
  margin-top: 10px;
  cursor: pointer;
  color: ${theme.colors.MainColorB};
  opacity: 0;
  transition: opacity 0.3s ease;

  &.show {
    opacity: 1;
  }
`;