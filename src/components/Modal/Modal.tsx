import React, { useRef } from 'react';
import * as S from "./Modal.style";
import useModalOutsideClick from '../../hooks/useModalOutsideClick';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose } : Props) => {
  const modalRef = useRef(null);
  const closeModal = () => {
    onClose?.() ;
  };

  useModalOutsideClick({ ref: modalRef, callback: closeModal });

  return (
    <S.Overlay>
      <S.ModalWrap ref={modalRef}>
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
