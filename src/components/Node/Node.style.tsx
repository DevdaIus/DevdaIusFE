import styled from "styled-components";
import theme from './../../style/theme';
import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
`;

export const NodeAndAddBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items : center;
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
  margin: 3px;

  &.show {
    opacity: 1; /* show 클래스가 추가되었을 때 나타남 */
  }
`;

export const NodeAddBtn = styled(PlusCircleOutlined)`
  cursor: pointer;
  color: ${theme.colors.MainColorB};
  opacity: 0;
  transition: opacity 0.3s ease;
  margin: 5px;

  &.show {
    opacity: 1;
  }
`;

export const NodeDeleteBtn = styled(CloseOutlined)`
  cursor: pointer;
  color: ${theme.colors.G2};
  font-size: 12px;
`

export const NodeText = styled.p`
  font-size: 14px;
  margin-left: 50px;
  margin-right: 40px;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;