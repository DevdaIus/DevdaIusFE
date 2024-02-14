import { useState } from "react";
import Modal from "../Modal/Modal";
import * as S from "./Node.style";

const Node = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onShowModal = () => {
    setModalOpen(true);
  };

  return (
    <S.Wrapper 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.DetailBtn className={isHovered ? "show" : ""}>자세히</S.DetailBtn>
      <S.NodeAndAddBtnWrapper> 
        <S.NodeAddBtn className={isHovered ? "show" : ""} onClick={onShowModal} />
        <S.NodeBox
          className="node"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          노드            
        </S.NodeBox>
        <S.NodeAddBtn className={isHovered ? "show" : ""} onClick={onShowModal} />
        {modalOpen && (<Modal
          open={modalOpen}
          onClose={() => {
          setModalOpen(false);
        }}
      />)}
      </S.NodeAndAddBtnWrapper>
    </S.Wrapper>
  )
};

export default Node;
