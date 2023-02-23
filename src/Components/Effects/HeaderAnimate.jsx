import React, { useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import WobbleTop from './WobbleTop';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80vh;
    user-select: none;
    @media screen and (max-width:1000px){
        height: fit-content;
        padding: 30px;
        box-sizing: border-box;
    };
`;
/** 감시 대상 및 움직임 지정 */
const Observe = styled.img`
    position: absolute;
    width: 100%;
    @media screen and (max-width:1000px){
        display: none;
    };
`;
/** 제목 컨테이너 */
const Head = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    text-shadow: 5px 5px 5px black;
`;
/** 제목 */
const Head1 = styled.div`
    font-size: 90px;
    font-weight: 900;
    color: white;
    line-height: 90px;
    letter-spacing: 20px;
    @media screen and (max-width:600px){
        font-size: 50px;
    };
`;
/** 서브 제목 */
const Head2 = styled.div`
    font-size: 40px;
    font-weight: 800;
    color: white;
    letter-spacing: 10px;
    @media screen and (max-width:600px){
        font-size: 20px;
    };
`;
/** 홈페이지의 움직이는 제목 component */
function HeaderAnimate({main='main text',sub='sub text'}) {
    const container = useRef(null);
    const handleMove = useCallback((e)=>{
        document.querySelectorAll('.observe').forEach(function(move){
            var moveValue = move.getAttribute('data-value');
            var x = (e.clientX * moveValue)/200;
            var y = (e.clientY * moveValue)/200;
            move.style.transform = 'translateX('+x+'px) translateY('+y+'px)';
        });
    },[])
    useEffect(()=>{
        let current = container.current;
        current.addEventListener('mousemove',handleMove)
        return ()=>{
            current.removeEventListener('mousemove',handleMove);
        }
    },[])
    return (
        <Container ref={container}>
            <Head>
                <WobbleTop>
                    <Head1>{main}</Head1>
                    <Head2>{sub}</Head2>
                </WobbleTop>
            </Head>
            <Observe className="observe" data-value='8' src="../headerAnimate/image1.png"/>
            <Observe className="observe" data-value='10' src="../headerAnimate/image2.png"/>
            <Observe className="observe" data-value='-3' src="../headerAnimate/image3.png"/>
            <Observe className="observe" data-value='-6' src="../headerAnimate/image4.png"/>
            <Observe className="observe" data-value='-10' src="../headerAnimate/image5.png"/>
            <Observe className="observe" data-value='-9' src="../headerAnimate/image6.png"/>
            <Observe className="observe" data-value='11' src="../headerAnimate/image7.png"/>
            <Observe className="observe" data-value='8' src="../headerAnimate/image8.png"/>
        </Container>
    )
}

export default HeaderAnimate