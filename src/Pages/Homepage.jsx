import React from 'react';
import styled from '@emotion/styled';
import { ContentsButtonSize1 } from '../Components/Buttons/ContentsButton';
import { Link } from 'react-router-dom';
import HeaderAnimate from '../Components/HeaderAnimate';
import AboutMySelf from '../Components/About/AboutMySelf';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #2b2b2b;
    color: white;
    background-image: url(./images/backDefault.png);
`;
/** /home 로딩시 페이지 */
function Homepage() {
    return (
        <Container>
            <HeaderAnimate/>
            <AboutMySelf/>
            <Link to={'/projects/clone-codings'}><ContentsButtonSize1 borderColor={'FB2576'} imgsrc={'../images/clones.png'}>Clone Codings</ContentsButtonSize1></Link>
            <Link to={'/projects/original-projects'}><ContentsButtonSize1 borderColor={'FCE700'} imgsrc={'../images/originals.png'}>Original projects</ContentsButtonSize1></Link>
        </Container>
    )
}

export default Homepage