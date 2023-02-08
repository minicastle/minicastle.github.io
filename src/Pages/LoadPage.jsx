import React from 'react'
import styled from '@emotion/styled';
import Spectors from '../Components/Spector/Spectors';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

function LoadPage() {
    return (
        <Container>
            <Spectors/>
        </Container>
    )
}

export default LoadPage