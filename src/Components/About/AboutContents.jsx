import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    align-items: center;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    border-radius: 20px;
    padding: 30px 0;
`;
/** 이미지 컨텐츠 */
const Image = styled.img`
    width: 30%;
`;

/** 홈페이지 학교설명 */
function AboutContents({imageSrc,children}) {
    return (
        <Container>
            <Image src={imageSrc} alt=''/>
            {children}
        </Container>
    )
}

export default AboutContents