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

  const showModal = () => {
    setModalOpen(true);
  }

  return (
    <S.Wrapper>
      <S.DetailBtn className={isHovered ? "show" : ""}>자세히</S.DetailBtn>
      <S.NodeAndAddBtnWrapper> 
        <S.NodeAddBtn className={isHovered ? "show" : ""} />
        <S.NodeBox
          className="node"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          노드            
        </S.NodeBox>
        <S.NodeAddBtn className={isHovered ? "show" : ""} />
      </S.NodeAndAddBtnWrapper>
    </S.Wrapper>
  )
};

export default Node;
