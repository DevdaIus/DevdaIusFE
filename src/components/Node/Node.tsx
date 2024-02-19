import { useState } from "react";
import Modal from "../Modal/Modal";
import * as S from "./Node.style";
import MoreModal from "../MoreModal/MoreModal";
import NodeDeleteModal from "../NodeDeleteModal/NodeDeleteModal";

const Node = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [delNodeModalOpen, setDelNodeModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onShowModal = () => {
    setModalOpen(true);
  };

  const onShowMoreModal = () => {
    setMoreModalOpen(true);
  }

  const onShowDelModal = () => {
    setDelNodeModalOpen(true);
  }


  return (
    <S.Wrapper 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.DetailBtn className={isHovered ? "show" : ""} onClick={onShowMoreModal} >자세히</S.DetailBtn>
      <S.NodeAndAddBtnWrapper> 
        <S.NodeAddBtn className={isHovered ? "show" : ""} onClick={onShowModal} />
        <S.NodeBox
          className="node"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <S.NodeText>노드</S.NodeText>
          <S.NodeDeleteBtn onClick={onShowDelModal} />            
        </S.NodeBox>
        <S.NodeAddBtn className={isHovered ? "show" : ""} onClick={onShowModal} />
        {modalOpen && (
          <Modal
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
        )}
        {moreModalOpen && (
          <MoreModal
            open={moreModalOpen}
            onClose={() => {
              setMoreModalOpen(false);
            }}
          />
        )}
        {delNodeModalOpen && (
          <NodeDeleteModal
            onClose={() => {
              setDelNodeModalOpen(false);
            }}
          />
        )}
      </S.NodeAndAddBtnWrapper>
    </S.Wrapper>
  )
};

export default Node;
