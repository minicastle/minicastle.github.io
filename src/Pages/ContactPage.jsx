import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Type1, Type4 } from '../Components/TextFormat';
import HeaderAnimate from '../Components/Effects/HeaderAnimate';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
`;
/** 메일 콘테이너 */
const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 20px;
    max-width: 1000px;
    padding: 0 20px 10px;
    box-sizing: border-box;
    background-color: rgba(225, 238, 221, 0.6);
    border-radius: 10px;
`;
/** 메일 제목 입력 */
const MailTitleInput = styled.input`
    width: 100%;
    height: 30px;
    font-size: 25px;
    background-color: #FEFBE9;
    border: 3px solid #20262E;
    outline: none;
`;
/** 메일 내용 입력 */
const MailInnerText = styled.textarea`
    width: 100%;
    height: 30rem;
    font-size: 25px;
    background-color: #FEFBE9;
    border: 3px solid #20262E;
    outline: none;
`;
/** 메일 버튼 콘테이너*/
const MailButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5%;
    width: 100%;
`;
/** 메일 버튼 */
const MailButton = styled.a`
    width: fit-content;
    height: 40px;
    padding: 10px 10px 0;
    font-family: 'ok';
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    background-color: ${(props)=>{return '#'+props.bgcolor}};
    border: 5px solid ${(props)=>{return '#'+props.hovering}};
    color: ${(props)=>{return '#'+props.color}};
    :hover{
        background-color: ${(props)=>{return '#'+props.hovering}};
        border: 5px solid ${(props)=>{return '#'+props.bgcolor}};
    }
`;
/** /contacts 로딩시 사용페이지 */
function ContactPage() {
    const [title,setTitle] = useState('');
    const [innerText,setInnerText] = useState('');
    return (
        <Container>
            <HeaderAnimate main='Contact' sub='Pick Me UP!!!!!!'/>
            <MailContainer>
                <Type1 color='20262E'>Mail Send</Type1>
                <Type4 color='20262E'>이 페이지는 Window Mail을 이용하게 됩니다.</Type4>
                <MailTitleInput value={title} placeholder='Title Here' onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
                <MailInnerText value={innerText} placeholder='Inner Text Here' onChange={(e)=>{
                    setInnerText(e.target.value);
                }}/>
                <MailButtonContainer>
                    <MailButton href={`mailto:minicastle@kakao.com?subject=${title}&body=${innerText}`} bgcolor='93BFCF' hovering='6096B4' color='ffffff' onClick={()=>{
                        setTitle('');
                        setInnerText('');
                    }}>Submit</MailButton>
                    <MailButton bgcolor='F48484' hovering='F55050' color='ffffff' onClick={()=>{
                        window.navigator.clipboard.writeText('minicastle@kakao.com');
                        alert('클립보드에 메일주소( minicastle@kakao.com )가 \n복사되었습니다.');
                    }}>Copy Address</MailButton>
                </MailButtonContainer>
            </MailContainer>
            <iframe width={'80%'} height={'500px'} src=''></iframe>
        </Container>
    )
}

export default ContactPage