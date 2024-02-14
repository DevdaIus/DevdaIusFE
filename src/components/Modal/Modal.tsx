import React, { useState } from 'react';
import * as S from "./Modal.style";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose } : Props) => {
  const closeModal = () => {
    onClose?.() ;
  };

  return (
    <S.Overlay>
      <S.ModalWrap>
        <S.ModalHeader>
          <S.QuesAddTitle>질문 추가</S.QuesAddTitle>
          <S.CloseBtn onClick={closeModal} />
        </S.ModalHeader>
        <S.QuesInput placeholder='질문을 입력해주세요.'/>
        <S.ConfirmBtn>확인</S.ConfirmBtn>
      </S.ModalWrap>
    </S.Overlay>
  );
};

export default Modal;
