import React from 'react';
import styled from '@emotion/styled';
import SkillsGraph from './SkillsGraph';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 50px;
    margin-top: 60px;
`;
/** 중앙 배치되는 콘텐츠 */
const CenterItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 1000px;
`;
/** 오른쪽으로 배치되는 콘텐츠 */
const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin-left: 10%;
`;
/** 왼쪽으로 배치되는 콘텐츠 */
const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin-right: 10%;
`;

function AboutMySelf() {
    return (
        <Container>
            <CenterItem>
                <SkillsGraph/>
            </CenterItem>
            <LeftSide></LeftSide>
            <RightSide></RightSide>
            <LeftSide></LeftSide>
        </Container>
    )
}

export default AboutMySelf