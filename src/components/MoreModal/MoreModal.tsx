import React, { useRef, useState } from "react";
import * as S from "./MoreModal.style";
import useModalOutsideClick from '../../hooks/useModalOutsideClick';
import useCopyClipBoard from "../../hooks/useCopyClipBoard";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MoreModal({ open, onClose }: Props) {
  const modalRef = useRef(null);
  const [isCopy, onCopy] = useCopyClipBoard();
  const [isEditing, setIsEditing] = useState(false);

  const closeModal = () => {
    onClose?.();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };


  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
  };

  useModalOutsideClick({ ref: modalRef, callback: closeModal });

  return (
    <S.Overlay>
      <S.ModalWrap ref={modalRef}>
        <S.ModalHeader>
          <S.QuesAddTitle>자세히</S.QuesAddTitle>
          <S.CloseBtn onClick={closeModal} />
        </S.ModalHeader>
        <S.QuesAnsWrap>
          <S.QuesWrap>
            <S.QAText>Q</S.QAText>
            {isEditing ? (
              <>
                <S.QuesInput value="Subject" />
                <S.BtnWrap>
                  <S.SaveBtn onClick={handleSaveClick} />
                  <S.CancelBtn onClick={handleCancelClick} />
                </S.BtnWrap>
              </>
            ) : (
              <>
                <S.QuesBox>Subject</S.QuesBox>
                <S.BtnWrap>
                  <S.EditBtn onClick={handleEditClick} />
                  <S.CopyBtn onClick={() => handleCopyClipBoard('복사된 텍스트')} />
                </S.BtnWrap>
              </>
            )}
          </S.QuesWrap>
          <S.AnsWrap>
            <S.QAText>A</S.QAText>
            <S.AnsInput placeholder='답변을 입력해주세요.'/>
            <S.ConfirmBtn>확인</S.ConfirmBtn>
          </S.AnsWrap>
        </S.QuesAnsWrap>
      </S.ModalWrap>
    </S.Overlay>
  );
}
