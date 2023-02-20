import React from 'react';
import styled from '@emotion/styled';
import { ContentsButtonSize1 } from '../Components/Buttons/ContentsButton';
import { Link } from 'react-router-dom';
import HeaderAnimate from '../Components/Effects/HeaderAnimate';
import AboutMySelf from '../Components/About/AboutMySelf';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    margin-bottom: 100px;
`;
/** /home 로딩시 페이지 */
function Homepage() {
    return (
        <Container>
            <HeaderAnimate main='Portfolio' sub='made by.minicastle'/>
            <AboutMySelf/>
            <Link to={'/projects'} onClick={()=>{window.scrollTo(0,0)}}><ContentsButtonSize1 borderColor={'FB2576'} imgsrc={'../images/clones.png'}>Project Page</ContentsButtonSize1></Link>
            <Link to={'/about'} onClick={()=>{window.scrollTo(0,0)}}><ContentsButtonSize1 borderColor={'FCE700'} imgsrc={'../images/originals.png'}>About Page</ContentsButtonSize1></Link>
        </Container>
    )
}

export default Homepage