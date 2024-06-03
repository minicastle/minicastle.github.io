import React, { useState } from "react";
import styled from "@emotion/styled";

const Size1Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 6px 7px 10px 2px black;
  position: relative;
  width: 800px;
  height: 300px;
  background-image: ${(props) => {
    return "url(" + props.imgsrc + ")";
  }};
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 4px solid
    ${(props) => {
      return "#" + props.borderColor;
    }};
  border-radius: 20px;
  margin: 20px 0;
  :hover {
    animation: grow 0.2s linear both;
    #arrow {
      &::after {
        content: "→";
      }
    }
  }
  @keyframes grow {
    from {
      scale: 1;
    }
    to {
      scale: 1.008;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 550px;
    height: 250px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 200px;
  }
`;
/** 자체제작 버튼 제목 */
const Size1Title = styled.div`
  user-select: none;
  font-size: 30px;
  font-family: "budae";
  z-index: 1;
  transition: 0.5s ease-in-out;
  ${(props) => {
    return props.description
      ? { border: "5px solid transparent", padding: "5px 10px" }
      : { border: "5px solid white", padding: "5px" };
  }}
  @media screen and (max-width:600px) {
    font-size: 20px;
  }
`;
/** 자체제작 버튼 Arrow 콘텐츠 표시 */
const Size1Arrow = styled.div`
  font-size: 60px;
  font-weight: bold;
  z-index: 1;
`;
const Size1Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2b2b2b;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
/** 이미지 포함 자체체작 버튼 1번 타입 */
function ContentsButtonSize1({ children, imgsrc, borderColor }) {
  const [description, setDiscription] = useState(true);
  return (
    <Size1Container
      borderColor={borderColor}
      imgsrc={imgsrc}
      onMouseOver={() => {
        setDiscription(false);
      }}
      onMouseOut={() => {
        setDiscription(true);
      }}
    >
      <Size1Image />
      <Size1Title description={description}>{children}</Size1Title>
      <Size1Arrow id="arrow"></Size1Arrow>
    </Size1Container>
  );
}

export { ContentsButtonSize1 };
