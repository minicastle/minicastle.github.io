import React from 'react'
import styled from '@emotion/styled';
import GridBoard from '../Components/Projects/GridBoard';
import OriginalList from '../Data/OriginalList.json';
import HeaderAnimate from '../Components/Effects/HeaderAnimate';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
/** /projects/original-projects 로딩시 사용페이지 */
function ProjectPageOriginalProject() {
    return (
        <Container>
            <HeaderAnimate main='Originals' sub='Original projects'/>
            <GridBoard original={OriginalList}></GridBoard>
        </Container>
    )
}

export default ProjectPageOriginalProject