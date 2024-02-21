import React, { useRef } from "react";
import * as S from "./MoreModal.style";
import useModalOutsideClick from '../../hooks/useModalOutsideClick';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MoreModal({ open, onClose }: Props) {
  const modalRef = useRef(null);
  const closeModal = () => {
    onClose?.();
  };

  useModalOutsideClick({ ref: modalRef, callback: closeModal });

  return (
    <S.Overlay>
      <S.ModalWrap ref={modalRef}>
        <S.ModalHeader>
          <S.QuesAddTitle>자세히</S.QuesAddTitle>
          <S.CloseBtn onClick={closeModal} />
        </S.ModalHeader>
      </S.ModalWrap>
    </S.Overlay>
  );
}
