import React from "react";
import * as S from "./MoreModal.style";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MoreModal({ open, onClose }: Props) {
  const closeModal = () => {
    onClose?.();
  };

  return (
    <S.Overlay>
      <S.ModalWrap>
        <S.ModalHeader>
          <S.QuesAddTitle>자세히</S.QuesAddTitle>
          <S.CloseBtn onClick={closeModal} />
        </S.ModalHeader>
      </S.ModalWrap>
    </S.Overlay>
  );
}
