import React from 'react';
import styled from '@emotion/styled';
import SkillsGraph from './SkillsGraph';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 50px;
    margin-top: 60px;
    position: relative;
`;
const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
`;
const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
`;

function AboutMySelf() {
    return (
        <Container>
            <RightSide>
                <SkillsGraph/>
            </RightSide>
            <LeftSide></LeftSide>
            <RightSide></RightSide>
            <LeftSide></LeftSide>
        </Container>
    )
}

export default AboutMySelf