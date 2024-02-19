import React from 'react';
import * as S from "./NodeDeleteModal.style";

interface Props {
  onClose: () => void;
}

const NodeDeleteModal = ({ onClose } : Props) => {
  const closeModal = () => {
    onClose?.() ;
  };

  return (
    <S.Overlay>
      <S.ModalWrap>
        <S.ModalHeader />
        <S.NodeTextBox>
          <S.NodeText>삭제 하시겠습니까?</S.NodeText>
          <S.NodeText>삭제하시면 자식 노드와 답변이 전부 삭제됩니다.</S.NodeText>
        </S.NodeTextBox>
        <S.FlexBox>
          <S.NoBtn onClick={closeModal}>아니오</S.NoBtn>
          <S.YesBtn>예</S.YesBtn>
        </S.FlexBox>
      </S.ModalWrap>
    </S.Overlay>
  );
};

export default NodeDeleteModal;
