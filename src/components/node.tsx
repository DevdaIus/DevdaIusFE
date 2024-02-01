import { useState } from "react";
import Modal from "./Modal";

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
    <>
      <div
        className="node"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        안녕
        {isHovered && (
          <>
            <button className="plusBtn" onClick={showModal}>+</button>
            {modalOpen && <Modal setModalOpen={setModalOpen} title='질문 추가' /> }
            <button className="detailBtn">자세히 보기</button>
          </>
        )}
      </div>
    </>
    
  )
};

export default Node;