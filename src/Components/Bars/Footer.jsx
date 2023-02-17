import React from 'react';
import styled from '@emotion/styled';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineMail,AiFillInstagram} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    max-height: 400px;
    height: fit-content;
    margin: 100px 0 0;
`;
/** 메인 리스트 */
const MainList = styled.ul`
    display: flex;
    width: 60%;
    min-width: 530px;
    list-style: none;
    justify-content: space-between;
    align-items: flex-start;
    margin: 50px 0 100px;
`;
/** 메인 리스트 아이템 */
const MainListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 25px;
    position: relative;
    gap: 30px;
    :hover{
        ::after{
            content: '▶';
            color: #C9F4AA;
            position: absolute;
            top: 0;
            font-size: 20px;
            left: -25px;
        }
    }
`;
/** 서브 리스트 */
const SubList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    padding: 0;
`;
/** 서브 리스트 아이템 */
const SubListItem = styled.li`
    font-size: 20px;
    position: relative;
    transition: 500ms ease-in-out;
    :hover{
        ::after{
            content: '●';
            color: #E5FDD1;
            position: absolute;
            top: 7px;
            font-size: 10px;
            left: -15px;
        }
    }
`;
/** 나와 관련된 사이트 리스트 */
const SiteList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 40px;
`;
/** 나와 관련된 사이트 리스트 아이템 */
const SiteListItem = styled.li`
    font-size: 30px;
`;
/**Footer Bar */
function Footer() {
    return (
        <Container>
            <MainList>
                <MainListItem>
                    <Link to={'/home'} onClick={()=>{window.scrollTo(0,0)}}>Home</Link>
                </MainListItem>
                <MainListItem>
                    <Link to={'/projects'} onClick={()=>{window.scrollTo(0,0)}}>Projects</Link>
                </MainListItem>
                <MainListItem>
                <Link to={'/about'} onClick={()=>{window.scrollTo(0,0)}}>About</Link>
                    <SubList>
                        <Link to={'/about#school'} onClick={()=>{window.scrollTo(0,0)}}><SubListItem>School</SubListItem></Link>
                        <Link to={'/about#career'} onClick={()=>{window.scrollTo(0,0)}}><SubListItem>Career</SubListItem></Link>
                    </SubList>
                </MainListItem>
                <MainListItem>
                    <Link to={'/contact'} onClick={()=>{window.scrollTo(0,0)}}>Contact</Link>
                    <SubList>
                        <Link to={'/contact?#email'} onClick={()=>{window.scrollTo(0,0)}}><SubListItem>E-mail</SubListItem></Link>
                        <Link to={'/contact?#git'} onClick={()=>{window.scrollTo(0,0)}}><SubListItem>Git</SubListItem></Link>
                        <Link to={'/contact?#instagram'} onClick={()=>{window.scrollTo(0,0)}}><SubListItem>Instagram</SubListItem></Link>
                    </SubList>
                </MainListItem>
                <MainListItem>
                    <Link to={'/stats'} onClick={()=>{window.scrollTo(0,0)}}>Stats</Link>
                    <SubList>
                        <Link to={'/stats?#language'} onClick={()=>{window.scrollTo(0,0)}}><SubListItem>Language</SubListItem></Link>
                        <Link to={'/stats?#library'} onClick={()=>{window.scrollTo(0,0)}}><SubListItem>Library</SubListItem></Link>
                    </SubList>
                </MainListItem>
            </MainList>
            <SiteList>
                <Link to={'https://github.com/minicastle'} target='blank'><SiteListItem><BsGithub/></SiteListItem></Link>
                <a href='mailto:minicastle@kakao.com'><SiteListItem><AiOutlineMail/></SiteListItem></a>
                <Link to={'https://www.instagram.com/jk598200/'} target='blank'><SiteListItem><AiFillInstagram/></SiteListItem></Link>
            </SiteList>
        </Container>
    )
}

export default Footer