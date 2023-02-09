import React, { useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80vh;
`;
const Observe = styled.img`
    position: absolute;
    width: 100%;
`;
const Head = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 10;
    text-shadow: 5px 5px 5px black;
`;
const Head1 = styled.div`
    font-size: 90px;
    font-weight: 900;
    color: white;
    line-height: 90px;
    letter-spacing: 20px;
`;
const Head2 = styled.div`
    font-size: 40px;
    font-weight: 800;
    color: white;
    letter-spacing: 10px;
`;
function HeaderAnimate() {
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
            <Head1>Portfolio</Head1>
            <Head2>made by.minicastle</Head2>
        </Head>
            <Observe className="observe" data-value='8' src="./headerAnimate/image1.png"/>
            <Observe className="observe" data-value='10' src="./headerAnimate/image2.png"/>
            <Observe className="observe" data-value='-3' src="./headerAnimate/image3.png"/>
            <Observe className="observe" data-value='-6' src="./headerAnimate/image4.png"/>
            <Observe className="observe" data-value='-10' src="./headerAnimate/image5.png"/>
            <Observe className="observe" data-value='-9' src="./headerAnimate/image6.png"/>
            <Observe className="observe" data-value='11' src="./headerAnimate/image7.png"/>
            <Observe className="observe" data-value='8' src="./headerAnimate/image8.png"/>
        </Container>
    )
}

export default HeaderAnimate