import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
const NavHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    gap: 10px;
    user-select: none;
    cursor: pointer;
`;
const NavIcon = styled.img`
    height: 60%;
    border-radius: 50%;
`;
const NavTitle = styled.span`
    font-size: 20px;
    font-family: 'LineSeed';
`;
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
const MenuListItem = styled.li`
    cursor: pointer;
    user-select: none;
    ${(props)=>{return props.pageState?{color:'#919191'}:''}}
    :hover{
        scale: 1.03;
        color: #919191;
    }
`;

function Navbar({pageData='home'}) {
    return (
        <Container>
            <Link to="/home">
                <NavHeader>
                    <NavIcon src='../../Logo.png'/>
                    <NavTitle>Minicastle</NavTitle>
                </NavHeader>
            </Link>
            <MenuList>
                <Link to={'/projects'}><MenuListItem pageState={pageData==='projects'}>Projects</MenuListItem></Link>
                <Link to={'/about'}><MenuListItem pageState={pageData==='about'}>About</MenuListItem></Link>
                <Link to={'/contact'}><MenuListItem pageState={pageData==='contact'}>Contact</MenuListItem></Link>
                <Link to={'/stats'}><MenuListItem pageState={pageData==='stats'}>Stats</MenuListItem></Link>
            </MenuList>
        </Container>
    )
}

export default Navbar