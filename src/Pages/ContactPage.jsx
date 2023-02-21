/* global kakao */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Type4 } from '../Components/TextFormat';
const {kakao} = window;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
`;
/** 메일 콘테이너 */
const Mail = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #2b2b2b;
    padding: 20px 50px 50px;
    box-sizing: border-box;
    gap: 50px;
`;
/** 메일 설명 및 주소 콘테이너 */
const MailInfo = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
/** 메일 보내기 콘테이너 */
const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: 60%;
    gap: 20px;
    max-width: 1000px;
    min-width: 380px;
    padding: 0 20px 10px;
    box-sizing: border-box;
    border-radius: 10px;
`;
/** 메일 보내기 제목 컨테이너 */
const MailTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;
/** 메일 보내기 title 입력 */
const MailTitleInput = styled.input`
    width: 100%;
    height: 50px;
    font-size: 25px;
    background-color: black;
    border: 3px solid #20262E;
    border-radius: 15px;
    outline: none;
    box-sizing: border-box;
    color: white;
    padding: 20px 20px;
`;
/** 메일 보내기 내용 입력 */
const MailInnerText = styled.textarea`
    box-sizing: border-box;
    border-radius: 15px;
    padding: 20px 20px;
    width: 100%;
    height: 30rem;
    color: white;
    font-size: 25px;
    background-color: black;
    border: 3px solid #20262E;
    outline: none;
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
/** 카카오 맵 API 콘테이너 */
const KakaoMap = styled.div`
    width: 450px;
    height: 330px;
`;

/** /contacts 로딩시 사용페이지 */
function ContactPage() {
    const [title,setTitle] = useState('');
    const [innerText,setInnerText] = useState('');
    useEffect(()=>{
        var container = document.getElementById('kakaomap');
        var options = {
            center: new kakao.maps.LatLng(37.59285730635721,126.97318713948685), //지도의 중심좌표.
            level: 9 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, options);
        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();
        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.644909106647,127.007480203776)/** 마커 위치 */
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    },[]);
    return (
        <Container>
            <Mail>
                <MailInfo>
                    <a id='email'><Type4 color='ECF9FF'>Email</Type4></a>
                    <Type4>- minicastle@kakao.com </Type4>
                    <MailButton bgcolor='93BFCF' hovering='6096B4' color='ffffff' onClick={()=>{
                        window.navigator.clipboard.writeText('minicastle@kakao.com');
                        alert('클립보드에 메일주소( minicastle@kakao.com )가 \n복사되었습니다.');
                    }}>Copy Address</MailButton>
                    <a id='git'><Type4> Git Hub</Type4></a>
                    <Type4><a href='https://github.com/minicastle' target={'_blank'}>- https://github.com/minicastle</a></Type4>
                    <a id='address'><Type4 color='ECF9FF'>Address</Type4></a>
                    <Type4> - 서울특별시 강북구 인수동 4.19로 13길</Type4>
                    <KakaoMap id='kakaomap'></KakaoMap>
                </MailInfo>
                <MailContainer>
                    <MailTitleContainer><Type4>Mail Send</Type4></MailTitleContainer>
                    <MailTitleInput value={title} placeholder='Title Here' onChange={(e)=>{
                        setTitle(e.target.value);
                    }}/>
                    <MailInnerText value={innerText} placeholder='Inner Text Here' onChange={(e)=>{
                        setInnerText(e.target.value);
                    }}/>
                        <MailButton href={`mailto:minicastle@kakao.com?subject=${title}&body=${innerText}`} bgcolor='93BFCF' hovering='6096B4' color='ffffff' onClick={()=>{
                            setTimeout(()=>{
                                setTitle('');
                                setInnerText('');
                            },200)
                        }}>Submit</MailButton>
                </MailContainer>
            </Mail>
</Container>
    )
}

export default ContactPage