import React from 'react';
import styled from '@emotion/styled';
import SkillsGraph from '../Components/About/SkillsGraph';
import { Type3 } from '../Components/TextFormat';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    color: white;
`;

/** /stats 로딩시 사용 페이지 */
function StatPage() {
    return (
        <Container>
            <a id='language'/>
            <SkillsGraph></SkillsGraph>
            <a id="library"/>
            <Type3>Available Library</Type3>
        </Container>
    )
}

export default StatPage