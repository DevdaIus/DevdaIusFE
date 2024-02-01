import React from 'react';

type Props = {
  title?: string;
  setModalOpen: (isOpen: boolean) => void;
};

const Modal = ({ title, setModalOpen }: Props) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={closeModal}>X</button>
      <input placeholder='질문 내용을 입력해주세요.'/>
      <button>확인</button>
    </>
  );
};

export default Modal;
