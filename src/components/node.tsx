import { useState } from "react";

const Node = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="node"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      안녕
      {isHovered && (
        <>
          <button className="plusBtn">+</button>
          <button className="detailBtn">자세히 보기</button>
        </>
      )}
    </div>
  )
};

export default Node;