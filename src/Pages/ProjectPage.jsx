import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import GridBoard from '../Components/Projects/GridBoard';
import CloneList from '../Data/ClonesList.json';
import OriginalList from '../Data/OriginalList.json';
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
/** /projects 로딩시 사용페이지 */
function ProjectPage() {
    return (
        <Container>
            <GridBoard clone={CloneList} original={OriginalList}></GridBoard>
        </Container>
    )
}

export default ProjectPage