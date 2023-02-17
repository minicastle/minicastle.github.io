import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import WobbleTop from '../Effects/WobbleTop';
import WobbleVertical from '../Effects/WobbleVertical';

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 0 10%;
    position: sticky;
    top: 0;
    z-index: 100;
`;
/** Nav 제목 및 이미지 컨테이너(/home) */
const NavHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    gap: 10px;
    user-select: none;
    cursor: pointer;
`;
/** Nav 이미지*/
const NavIcon = styled.img`
    height: 60%;
    border-radius: 50%;
`;
/** Nav 제목*/
const NavTitle = styled.span`
    font-size: 20px;
    font-family: 'LineSeed';
`;
/** Nav 메뉴 아이템 컨테이너 */
const MenuList = styled.ul`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 100%;
    gap: 40px;
    font-family: 'LineSeed';
    font-size: 20px;
`;
/** Nav 메뉴 아이템 */
const MenuListItem = styled.li`
    cursor: pointer;
    user-select: none;
    ${(props)=>{return props.pageState?{color:'#919191'}:''}}
    :hover{
        scale: 1.03;
        color: #919191;
    }
`;
/** NavBar */
function Navbar({pageData='home'}) {
    return (
        <Container>
            <Link to="/home" onClick={()=>{window.scrollTo(0,0)}}>
                <WobbleVertical>
                    <NavHeader>
                        <NavIcon src='../../Logo.png'/>
                        <NavTitle>Minicastle</NavTitle>
                    </NavHeader>
                </WobbleVertical>
            </Link>
            <MenuList>
                <Link to={'/projects'} onClick={()=>{window.scrollTo(0,0)}}><MenuListItem pageState={pageData==='projects'}><WobbleTop>Projects</WobbleTop></MenuListItem></Link>
                <Link to={'/about'} onClick={()=>{window.scrollTo(0,0)}}><MenuListItem pageState={pageData==='about'}><WobbleTop>About</WobbleTop></MenuListItem></Link>
                <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}><MenuListItem pageState={pageData==='contact'}><WobbleTop>Contact</WobbleTop></MenuListItem></Link>
                <Link to={'/stats'} onClick={()=>{window.scrollTo(0,0)}}><MenuListItem pageState={pageData==='stats'}><WobbleTop>Stats</WobbleTop></MenuListItem></Link>
            </MenuList>
        </Container>
    )
}

export default Navbar