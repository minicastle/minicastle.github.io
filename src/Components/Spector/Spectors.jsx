import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SpectorHeader from "./SpectorHeader";
import SpectorSub1 from "./SpectorSub1";
import SpectorSub2 from "./SpectorSub2";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    return props.load
      ? { backgroundColor: "black" }
      : { animation: "bcolorchange 0.5s linear", backgroundColor: "#2B2B2B" };
  }};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @keyframes bcolorchange {
    0% {
      background-color: black;
    }
    100% {
      background-color: #2b2b2b;
    }
  }
`;
/** 로딩시 화면 전환 이펙트 */
const Spector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => {
    return props.load ? "flex" : "none";
  }};
  animation: spectator 0.7s linear;
  animation-delay: ${(props) => {
    return props.time + "s";
  }};
  @keyframes spectator {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-2700px);
    }
  }
`;
/** 로딩 넘기기 상단 버튼 */
const NextContents = styled.div`
  transition: 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 50px;
  color: white;
  :hover {
    scale: 1.1;
  }
  :active {
    scale: 1;
  }
`;
/** /로딩시 처음으로 보여질 화면 */
function Spectors() {
  const [frame, setFrame] = useState("set1");
  const [load1, setLoad1] = useState(true);
  const [load2, setLoad2] = useState(true);
  useEffect(() => {
    let loadTimeout1 = setTimeout(() => {
      setLoad1(false);
    }, 690);
    let loadTimeout2 = setTimeout(() => {
      setLoad2(false);
    }, 890);
    let frameTimeout1 = setTimeout(() => {
      setFrame("set2");
    }, 5500);
    let frameTimeout2 = setTimeout(() => {
      setFrame("set3");
    }, 11500);

    return () => {
      clearTimeout(loadTimeout1, loadTimeout2, frameTimeout1, frameTimeout2);
    };
  }, []);
  return (
    <Container load={load2}>
      <Link to={"/home"}>
        <NextContents>
          <BsArrowRight />
        </NextContents>
      </Link>
      {load2 ? (
        <>
          <Spector load={load1}>
            <img
              src="./images/image 1.png"
              style={{ height: "100%", opacity: "0.5" }}
            />
          </Spector>
          <Spector load={load2} time={0.3}>
            <img
              src="./images/image 2.png"
              style={{ height: "100%", opacity: "0.5" }}
            />
          </Spector>
        </>
      ) : frame === "set1" ? (
        <SpectorHeader></SpectorHeader>
      ) : frame === "set2" ? (
        <SpectorSub1 />
      ) : (
        <SpectorSub2 />
      )}
    </Container>
  );
}

export default Spectors;
