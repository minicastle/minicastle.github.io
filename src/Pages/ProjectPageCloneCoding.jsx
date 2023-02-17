import React from 'react'
import styled from '@emotion/styled';
import GridBoard from '../Components/Projects/GridBoard';
import CloneList from '../Data/ClonesList.json';
import HeaderAnimate from '../Components/Effects/HeaderAnimate';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
/** /projects/clone-codings 로딩시 사용페이지 */
function ProjectPageCloneCoding() {
    return (
        <Container>
            <HeaderAnimate main='Clones' sub='Clon projects'/>
            <GridBoard clone={CloneList}></GridBoard>
        </Container>
    )
}

export default ProjectPageCloneCoding