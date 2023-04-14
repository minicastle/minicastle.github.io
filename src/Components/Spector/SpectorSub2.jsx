import React from "react";
import styled from "@emotion/styled";
import { Type2 } from "../TextFormat";
import BlinkContainer from "../Blink/BlinkContainer";
import { RxReload } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
/** 자체제작 버튼 컨테이너 */
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 60px 0 0;
`;
/** Custom button slice motion*/
const CornerButton = styled.div`
  transition: 300ms ease-in-out;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  font-weight: bold;
  gap: 5px;
  background-color: ${(props) => {
    return "#" + props.color;
  }};
  color: black;
  position: relative;
  font-size: 30px;
  padding: 10px 20px;
  border: solid 5px
    ${(props) => {
      return "#" + props.color;
    }};
  z-index: 1;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    rotate: 90deg;
    background-color: black;
    z-index: -11;
  }
  &::before {
    top: -200px;
    left: -200px;
  }
  &::after {
    bottom: -200px;
    right: -200px;
  }
  :hover {
    color: ${(props) => {
      return "#" + props.color;
    }};
    &::before {
      animation: slowMoveBefore 0.5s linear both;
    }
    &::after {
      animation: slowMoveAfter 0.5s linear both;
    }
    @keyframes slowMoveBefore {
      to {
        top: 0;
        left: 0;
      }
    }
    @keyframes slowMoveAfter {
      to {
        bottom: 0;
        right: 0;
      }
    }
  }
  opacity: 0;
  animation: Fadein 1s linear both;
  animation-delay: 3s;
  @keyframes Fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
/** 사이트 이어보기 */
function SpectorSub2() {
  return (
    <>
      <Container>
        <BlinkContainer time={2}>
          <Type2>포트폴리오를 보시겠습니까?</Type2>
        </BlinkContainer>
        <ButtonContainer>
          <Link to={"/"} reloadDocument>
            <CornerButton color="98D8AA">
              Replay <RxReload />
            </CornerButton>
          </Link>
          <Link to={"/home"}>
            <CornerButton color="FF6D60">
              See that <BsArrowRight />
            </CornerButton>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default SpectorSub2;
