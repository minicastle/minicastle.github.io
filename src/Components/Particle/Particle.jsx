import React, { useCallback } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    position:relative;
`;
/** 파티클 퍼짐 애니메이션 */
const Ticle = styled.span`
    width: 5px;
    height: 2px;
    position:absolute;
    background-color: white;
    top:0;
    left: 0;
    border-radius: 50% 50% 0 0;
    animation: TicleMover 0.2s linear infinite;
    animation-delay: ${(props)=>{return props.delay*20 + 'ms'}};
    rotate: ${(props)=>{return props.deg+270+'deg'}};
    @keyframes TicleMover {
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(20px);
            scale: 2;
        }
    }
`;
/** 제목에 입혀 사용할 파티클 에니메이션 */
function Particle() {
/**파티클 생성기 */
const TicleGenerator = useCallback(()=>{
    let contents = [];
    for(let i = 0;i<20;i++){
        contents.push(<Ticle key={i} deg={Math.random()*180} delay={i}></Ticle>);
    }
    return contents;
})
    return (
        <Container>
            {TicleGenerator()}
        </Container>
    )
}

export default Particle