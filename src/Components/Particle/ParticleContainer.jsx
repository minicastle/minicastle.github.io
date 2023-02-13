import React from 'react';
import styled from '@emotion/styled';
import Particle from './Particle';
const Container = styled.div`
    display: ${(props)=>{return props.mover?'flex':'none'}};
    justify-content: center;
    align-items: center;
    position: relative;
`;
/** 파티클 위치 설정용 */
function ParticleContainer({mover}) {
    return (
        <Container mover={mover}>
            <Particle></Particle>
        </Container>
    )
}

export default ParticleContainer