import React from 'react';
import styled from '@emotion/styled';
import { Type1, Type2 } from '../TextFormat';
import BlinkContainer from '../Blink/BlinkContainer';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


function SpectorSub1() {
    return (
        <Container>
            <BlinkContainer time={4}><Type2>이 사이트는 정성민의 '포트폴리오'를 위해 제작되었습니다.</Type2></BlinkContainer>
        </Container>
    )
}

export default SpectorSub1