import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Type2, Type4 } from '../TextFormat';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1030px;
    width: 100%;
    gap: 100px;
    margin-top: 5%;
`;
/** 게시판 형태의 아이템 콘테이너 */
const BoardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 50px;
    color: white;
    flex-flow: row wrap;
`;
/** 게시판 아이템 */
const BoardItem = styled.div`
    user-select: none;
    position: relative;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-bottom: 50px;
    max-width: 470px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px black;
    &::before{
        position: absolute;
        content: '';
        inset: -10px 40px;
        border-top: 4px solid #E71414;
        border-bottom: 4px solid #E71414;
        transform: skewY(15deg);
        transition: 300ms ease-in-out;
    }
    #title{
        transition: 0.3s ease-in-out;
        box-shadow: 0 0 4px #414141,
        0 0 0 6px ${(props)=>{return '#'+props.color}};
    }
    :hover{
        &::before{
            position: absolute;
            content: '';
            inset: -10px 30px;
            border-top: 4px solid #06FF00;
            border-bottom: 4px solid #06FF00;
            transform: skewY(0);
            transition: 300ms ease-in-out;
        }
        color: black;
        #title{
            transition: 0.3s ease-in-out;
            box-shadow:  0 0 4px #414141,
            0 0 0 400px ${(props)=>{return '#'+props.color}};
        }
    }
`;
/** Board Item Inner Container */
const BoardInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    overflow: hidden;
    background-color: #414141;
    padding: 30px;
    box-sizing: border-box;
    z-index: 11;
`;
/** Title 콘테이너 */
const TitleContain = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 5px 10px;
    text-align: center;
    border-radius: 10px;
`;
/** 게시판 아이템 이미지 */
const BoardItemImage = styled.img`
    margin: 0 10px;
    width: 100%;
`;
/** 태그 콘테이너 */
const Tags = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
`;
/** 태그 아이템 */
const Tag = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'ok';
    font-size: 20px;
`;
/** 링크 버튼 콘테이너 */
const LinkButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0 0;
    z-index: 11;
`;
/** 링크 버튼 */
const LinkButton = styled.div`
    transition: 0.2s ease-in-out;
    letter-spacing: 2px;
    text-align: center;
    padding: 5px 10px;
    border: 2px solid ${(props)=>{return '#'+props.bgcolor}};
    background-color: transparent;
    color: white;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #414141;
    :hover{
        background-color: ${(props)=>{return '#'+props.bgcolor}};
        color: ${(props)=>{return '#'+props.color}};
        letter-spacing: 0px;
    }
`;

function GridBoard({clone=[],original=[]}) {
    /** 게시판 아이템 생성기 */
    const Generater = useCallback((e)=>{
        let contents = [];
        for(let i = 0;i<e.length;i++){
            contents.push(
                <BoardItem color={e[i].color}>
                    <BoardInnerContainer>
                        <TitleContain id='title' color={e[i].color}><Type4>{e[i].title}</Type4></TitleContain>
                        <BoardItemImage src={e[i].img} alt=''/>
                        <LinkButtons>
                            <Link to={`${e[i].git}`} target={'_blank'}><LinkButton bgcolor={'F0FF42'} color={'000000'}>SOURCE</LinkButton></Link>
                            <Link to={`${e[i].link}`} target={'_blank'}><LinkButton bgcolor={'72FFFF'} color={'000000'}>PREVIEW</LinkButton></Link>
                        </LinkButtons>
                        <Tags>
                            {TagGen(e[i])}
                        </Tags>
                    </BoardInnerContainer>
                </BoardItem>
            )
        }
        return contents
    },[]);
    /** 태그 생성기 */
    const TagGen = useCallback((e)=>{
        let contents=[];
        for(let i = 0;i<e.tags.length;i++){
            contents.push(<Tag>#{e.tags[i]}</Tag>);
        }
        return contents;
    },[])

    return (
        <Container>
            {clone.length===0?"":
            <>
                <Type2>Clone Projects</Type2>
                <BoardContainer>
                    {Generater(clone)}
                </BoardContainer>
            </>
            }
            {original.length===0?"":
            <>
                <Type2>Original Projects</Type2>
                <BoardContainer>
                    {Generater(original)}
                </BoardContainer>
            </>}
        </Container>
    )
}

export default GridBoard