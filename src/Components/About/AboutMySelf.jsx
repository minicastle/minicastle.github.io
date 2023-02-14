import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import SkillsGraph from './SkillsGraph';
import AboutContents from './AboutContents';
import { Type3 } from '../TextFormat';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 50px;
    margin-top: 60px;
    overflow: hidden;
`;
/** 중앙 배치되는 콘텐츠 */
const CenterItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 1000px;
`;
/** 오른쪽으로 배치되는 콘텐츠 */
const RightSide = styled.div`
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    width: 95%;
    max-width: 1000px;
    margin-left: 5%;
    &.view{
        animation: in 1s ease-in-out both;
    }
    @keyframes in {
        from{
            opacity: 0;
            transform: translateX(-500px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
/** 왼쪽으로 배치되는 콘텐츠 */
const LeftSide = styled.div`
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    width: 95%;
    max-width: 1000px;
    margin-right: 5%;
    &.view{
        animation: in 1s ease-in-out both;
    }
`;
/** 텍스트 콘테이너 */
const TextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;
/** 텍스트 보더 */
const TextBorder = styled.div`
    display: flex;
    text-shadow: -1px 0 white,1px 0 white,0 1px white,0 -1px white;
`
/** information */
const Info = styled.div`
    display: flex;
    font-size: 20px;
    color: white;
    font-family: 'LineSeed';
    margin-top: 10px;
`;
/** 콘텐츠 인식 */
const Observer = styled.div`
    display: flex;
`;
/** 홈페이지의 설명 component */
function AboutMySelf() {
    useEffect(()=>{
        /** 그래프 컨텐츠 로딩시 시행 */
        let io = new IntersectionObserver((e)=>{
            e.forEach((item)=>{
                if(item.intersectionRatio>0){
                    item.target.classList.add('view');
                }
            })
        },{rootMargin:'-100px'});
        /** 할당 컨텐츠 */
        const list = document.querySelectorAll('#item');
        list.forEach((e)=>{
            io.observe(e);
        })
        return()=>{io.disconnect}
    },[])
    return (
        <Container>
            <CenterItem>
                <SkillsGraph/>
            </CenterItem>
            <LeftSide id='item'>
                <AboutContents imageSrc='./images/sudologo.png'>
                    <TextContainer>
                        <TextBorder><Type3 color='00337C'>수도전기 공업고등학교</Type3></TextBorder>
                        <Info> 정보통신 학과 : 2016년도 입학 ~ 2019년도 졸업</Info>
                        <Info> 수도전기 공업고등학교는 한국전력공사의 지원으로 설립되었습니다.</Info>
                        <Info> 국내 최고의 '마이스터고'라는 불리우며 많은 인재를 배출했습니다.</Info>
                        <Info> 자신의 꿈을 키워나가는 학교라는 목적성을 가지고</Info>
                        <Info> 학생모두가 현직에서의 업무능력을 키우기 위해 노력하고 있습니다.</Info>
                    </TextContainer>
                </AboutContents>
            </LeftSide>
            <RightSide id='item'>
                <AboutContents imageSrc='./images/dasonlogo.png'>
                    <TextContainer>
                        <Type3 color='89D36F'>다손테크 주식회사</Type3>
                        <Info> 2019.11 입사 ~ 2020.07 퇴사</Info>
                        <Info> 근무중에는 SCADA 시스템을 설계하고 Client가 사용할 UI설계</Info>
                        <Info> 서버렉 설계업무를 진행하였습니다.</Info>
                        <Info> 참여한 프로젝트는 평촌 IDC센터, 가산 IDC센터, 용인 세브란스 병원</Info>
                        <Info> 프로젝트에 참여하였습니다.</Info>
                        <Info style={{fontSize:'15px'}}> ▹ SCADA (Supervisory Control And Data Acquisition)</Info>
                        <Info style={{fontSize:'15px'}}> ▹ 원격 단말 장치로부터 신호를 받아 소프트웨어로</Info>
                        <Info style={{fontSize:'15px'}}> ▹ 하드웨어의 데이터를 수집 및 관리 제어하는 프로그램</Info>
                    </TextContainer>
                </AboutContents>
            </RightSide>
            <LeftSide id='item'></LeftSide>
        </Container>
    )
}

export default AboutMySelf