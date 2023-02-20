import React from 'react';
import styled from '@emotion/styled';
import GridBoard from '../Components/Projects/GridBoard';
import CloneList from '../Data/ClonesList.json';
import OriginalList from '../Data/OriginalList.json';
import HeaderAnimate from '../Components/Effects/HeaderAnimate';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 100px;
`;
/** /projects 로딩시 사용페이지 */
function ProjectPage() {
    return (
        <Container>
            <HeaderAnimate main='Projects' sub='Clons & Originals'/>
            <GridBoard clone={CloneList} original={OriginalList}></GridBoard>
        </Container>
    )
}

export default ProjectPage