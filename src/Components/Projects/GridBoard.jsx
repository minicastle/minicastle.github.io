import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { Type4 } from '../TextFormat';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1030px;
    width: 100%;
    gap: 100px;
`;
/** 게시판 형태의 아이템 콘테이너 */
const BoardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 50px;
    color: white;
    flex-flow: row wrap;
`;
/** 게시판 아이템 */
const BoardItem = styled.div`
    transition: 0.4s ease-in-out;
    opacity: 0;
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 470px;
    margin-bottom: 50px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px black;
    &.view{
        opacity: 1;
    }
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
            0 0 0 1000px ${(props)=>{return '#'+props.color}};
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
    height: 100%;
    max-height: 250px;
`;
/** 태그 콘테이너 */
const Tags = styled.div`
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
`;
/** 태그 아이템 */
const Tag = styled.div`
    display: flex;
    white-space: nowrap;
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
    useEffect(()=>{
        let io = new IntersectionObserver((e)=>{
            e.forEach((entry)=>{
                if(entry.intersectionRatio>0){
                    entry.target.classList.add('view');
                }
            })
        },{rootMargin:"-200px"})
        const list=document.querySelectorAll('#item');
        list.forEach((e)=>{
            io.observe(e);
        })
    },[])
    /** 게시판 아이템 생성기 */
    const Generater = useCallback((a,b)=>{
        let contents = [];
        for(let i = 0;i<a.length;i++){
            contents.push(
                <BoardItem id='item' color={a[i].color} key={`a boarditem ${i}`}>
                    <BoardInnerContainer key={`a boardinnerContainer ${i}`}>
                        <TitleContain key={`a titlecontainer ${i}`} id='title' color={a[i].color}><Type4 key={`a type4 ${i}`}>{a[i].title}</Type4></TitleContain>
                        <BoardItemImage loading='lazy' key={`a boarditemimage ${i}`} src={a[i].img} alt=''/>
                        <LinkButtons key={`a linkbuttons ${i}`}>
                            <Link key={`a link1 ${i}`} to={`${a[i].git}`} target={'_blank'}><LinkButton key={`a linkbutton1 ${i}`} bgcolor={'F0FF42'} color={'000000'}>SOURCE</LinkButton></Link>
                            <Link key={`a link2 ${i}`} to={`${a[i].link}`} target={'_blank'}><LinkButton key={`a linkbutton2 ${i}`} bgcolor={'72FFFF'} color={'000000'}>PREVIEW</LinkButton></Link>
                        </LinkButtons>
                        <Tags key={`a tags ${i}`}>
                            {TagGen(a[i])}
                        </Tags>
                    </BoardInnerContainer>
                </BoardItem>
            )
        }
        for(let i = 0;i<b.length;i++){
            contents.push(
                <BoardItem id='item' color={b[i].color} key={`b boarditem ${i}`}>
                    <BoardInnerContainer key={`b boardinnerContainer ${i}`}>
                        <TitleContain key={`b titlecontainer ${i}`} id='title' color={b[i].color}><Type4 key={`b type4 ${i}`}>{b[i].title}</Type4></TitleContain>
                        <BoardItemImage key={`b boarditemimage ${i}`} src={b[i].img} alt=''/>
                        <LinkButtons key={`b linkbuttons ${i}`}>
                            <Link key={`b link1 ${i}`} to={`${b[i].git}`} target={'_blank'}><LinkButton key={`b linkbutton1 ${i}`} bgcolor={'F0FF42'} color={'000000'}>SOURCE</LinkButton></Link>
                            <Link key={`b link2 ${i}`} to={`${b[i].link}`} target={'_blank'}><LinkButton key={`b linkbutton2 ${i}`} bgcolor={'72FFFF'} color={'000000'}>PREVIEW</LinkButton></Link>
                        </LinkButtons>
                        <Tags key={`b tags ${i}`}>
                            {TagGen(b[i])}
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
            contents.push(<Tag key={`tag${i}`}>#{e.tags[i]}</Tag>);
        }
        return contents;
    },[])

    return (
        <Container>
            <BoardContainer>
                {Generater(clone,original)}
            </BoardContainer>
        </Container>
    )
}

export default GridBoard