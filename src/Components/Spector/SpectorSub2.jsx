import React from 'react';
import styled from '@emotion/styled';
import { Type2 } from '../TextFormat';
import BlinkContainer from '../Blink/BlinkContainer';
import {RxReload} from 'react-icons/rx';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
/** 자체제작 버튼 컨테이너 */
const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 60px 0 0;
`;
/** 자체제작 버튼  */
const CustomButton = styled.div`
    box-shadow: 2px 5px 6px 2px black;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 20px;
    letter-spacing: 5px;
    background-color: #14C38E;
    padding: 10px 10px 15px;
    font-size: 30px;
    opacity: 0;
    animation: Fadein 1s linear both;
    animation-delay: 5s;
    color: white;
    @keyframes Fadein {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    :hover{
        scale: 1.03;
    }
`;
/** 사이트 이어보기 */
function SpectorSub2() {
    return (
        <>
        <Container>
            <BlinkContainer time={2}><Type2>포트폴리오를 보시겠습니까?</Type2></BlinkContainer>
            <ButtonContainer>
                <Link to={'/'} reloadDocument><CustomButton>Replay <RxReload/></CustomButton></Link>
                <Link to={'/home'}><CustomButton>See that <BsArrowRight/></CustomButton></Link>
            </ButtonContainer>
        </Container>
        </>
    )
}

export default SpectorSub2