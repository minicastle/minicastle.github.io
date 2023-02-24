import React, { useState } from 'react';
import styled from '@emotion/styled';
import { HashLink as Link } from 'react-router-hash-link';
import WobbleTop from '../Effects/WobbleTop';
import WobbleVertical from '../Effects/WobbleVertical';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Container = styled.div`
    transition: 300ms ease-in-out;
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
    @media screen and (max-width:700px){
        padding: 0 20px 0 10%;
    }
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
    @media screen and (max-width:700px){
        display: none;
    }
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
/** 메뉴 최소화 모뎀 열기*/
const MenuMinimizeOpen = styled.div`
    display: none;
    font-size: 28px;
    :active{
        scale: 0.95;
    }
    @media screen and (max-width:700px){
        ${(props)=>{return props.minimize?{display:'flex'}:""}}
    }
`;
/** 메뉴 최소화 모뎀 닫기*/
const MenuMinimizeClose = styled.div`
    display: none;
    font-size: 28px;
    :active{
        scale: 0.95;
    }
    @media screen and (max-width:700px){
        ${(props)=>{return props.minimize?"":{display:'flex'}}}
    }
    z-index: 101;
`;
/** 메뉴 최소화 컨테이너 */
const MenuMinimize = styled.div`
    display: none;
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 200vh;
    left: 0;
    animation: comeIn 0.15s linear;
    overflow: hidden;
    @keyframes comeIn {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0);
        }
    }
    @media screen and (max-width:700px){
        ${(props)=>{return props.minimize?"":{display:'flex'}}}
    }
    z-index: 100;
`;
/** 메뉴 최소화 콘테이너 닫기 외부처리*/
const MenuMinimizeCloserOuter = styled.div`
    height: 100%;
    width: 40%;
    background-color: rgba(0,0,0,0.3);
`;
/** 메뉴 최소화 아이템 콘테이너 */
const MenuMinimizeItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    width: 60%;
    height: 100%;
    padding: 10%;
    background-color: black;
    position: relative;
    box-sizing: border-box;
`;
/** 메뉴 최소화 아이템 리스트 */
const MenuMinimizeItemList = styled.ul`
    list-style: none;
    display: flex;
    position: absolute;
    top: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 25px;
    height: 100%;
    gap: 25px;
    font-weight: bold;
`;
/** 메뉴 최소화 아이템 서브 리스트 */
const MenuMinimizeItemSubList = styled.ul`
    list-style: square;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    font-size: 20px;
`;

/** NavBar */
function Navbar({pageData='home'}) {
    const [minimize,setMinimize] = useState(true);
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
            </MenuList>
            <MenuMinimizeOpen onClick={()=>{setMinimize(!minimize)}} minimize={minimize}><AiOutlineMenu/></MenuMinimizeOpen>
            <MenuMinimizeClose onClick={()=>{setMinimize(!minimize)}} minimize={minimize}><AiOutlineClose/></MenuMinimizeClose>
            <MenuMinimize minimize={minimize}>
                <MenuMinimizeCloserOuter onClick={()=>{setMinimize(!minimize)}}/>
                <MenuMinimizeItemContainer>
                    <MenuMinimizeItemList>
                        <Link to={'/projects'} onClick={()=>{window.scrollTo(0,0)}}><MenuListItem pageState={pageData==='projects'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>Projects</WobbleTop></MenuListItem></Link>
                        <Link to={'/about'} onClick={()=>{window.scrollTo(0,0)}}><MenuListItem pageState={pageData==='about'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>About</WobbleTop></MenuListItem></Link>
                        <MenuMinimizeItemSubList>
                            <Link to={'/about#school'}><MenuListItem pageState={pageData==='about'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>School</WobbleTop></MenuListItem></Link>
                            <Link to={'/about#career'}><MenuListItem pageState={pageData==='about'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>Career</WobbleTop></MenuListItem></Link>
                            <Link to={'/about#education'}><MenuListItem pageState={pageData==='about'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>Education</WobbleTop></MenuListItem></Link>
                        </MenuMinimizeItemSubList>
                        <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}><MenuListItem pageState={pageData==='contact'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>Contact</WobbleTop></MenuListItem></Link>
                        <MenuMinimizeItemSubList>
                        <Link to={'/contact#email'}><MenuListItem pageState={pageData==='contact'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>E-mail</WobbleTop></MenuListItem></Link>
                        <Link to={'/contact#git'}><MenuListItem pageState={pageData==='contact'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>Git</WobbleTop></MenuListItem></Link>
                        <Link to={'/contact#address'}><MenuListItem pageState={pageData==='contact'} onClick={()=>{setMinimize(!minimize)}}><WobbleTop>Address</WobbleTop></MenuListItem></Link>
                        </MenuMinimizeItemSubList>
                    </MenuMinimizeItemList>
                </MenuMinimizeItemContainer>
            </MenuMinimize>
        </Container>
    )
}

export default Navbar