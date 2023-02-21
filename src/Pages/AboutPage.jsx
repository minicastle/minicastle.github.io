import React from 'react';
import styled from '@emotion/styled';
import { Type3, Type4 } from '../Components/TextFormat';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    color: white;
    margin-top: 50px;
`;
/** about 콘테이너 */
const Abouts = styled.div`
    display: flex;
    width: 80%;
    max-width: 1000px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #2b2b2b;
    padding: 50px;
    margin-bottom: 20px;
`;
/** about text 콘테이너 */
const AboutTextContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0;
    border-top: 3px solid gray;
`;
/** about text */
const AboutText = styled.div`
    display: flex;
    font-size: 20px;
    color: #FEFCF3;
    color: ${(props)=>{return '#'+props.color}};
    font-family: 'LineSeed';
    margin-top: 10px;
    word-break: keep-all;
`;
/** about 이미지 콘테이너 */
const AboutImages = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    width: 100%;
`;
/** about 이미지 */
const AboutImage = styled.img`
    width: 300px;
`;

/** /about 로딩시 사용 페이지 */
function AboutPage() {
    return (
        <Container>
            <a id='school'></a>
            <Abouts>
                <Type3>School</Type3>
                <Type4>수도전기 공업고등학교</Type4>
                <AboutTextContainer>
                    <AboutText>정보통신 학과 : 2016년도 입학 ~ 2019년도 졸업</AboutText>
                    <AboutText>수도전기 공업고등학교는 한국전력공사의 지원으로 설립된 학교입니다.</AboutText>
                    <AboutText>국내 최고의 '마이스터고'라고 불리며 많은 인재를 배출했습니다.</AboutText>
                    <AboutText>자신의 꿈을 키워나가는 학교라는 목적성을 가지고 학생 모두가 </AboutText>
                    <AboutText>현직에서의 업무능력을 우선시하고 업무에 도움이 되는 지식을 쌓아나가는 학교입니다.</AboutText>
                </AboutTextContainer>
                <AboutImages>
                    <AboutImage src='./images/sudologo.png' alt=''/>
                    <AboutImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/SUDO_Electrical_Engineering_High_School_Front_View.jpg/800px-SUDO_Electrical_Engineering_High_School_Front_View.jpg' alt=''/>
                    <AboutImage src='https://sudo.myapply.kr/Content/sudo/images/main_img_1.png' alt=''/>
                </AboutImages>
            </Abouts>
            <a id='career'></a>
            <Abouts>
                <Type3>Career</Type3>
                <Type4>다손테크</Type4>
                <AboutTextContainer>
                    <AboutText>2019.11 입사 ~ 2020.07 퇴사</AboutText>
                </AboutTextContainer>
                <AboutImages>
                    <AboutImage src='./images/dasonlogo.png' alt=''/>                    
                    <AboutImage src='https://www.copadata.com/fileadmin/_processed_/7/1/csm_What-is-SCADA_body-2_f3d37945a3.jpg' alt=''/>
                </AboutImages>
            </Abouts>
            <Abouts>
                <Type3>Education</Type3>
                <Type4>FrontEnd</Type4>
                <AboutTextContainer>
                    <AboutText color='B5D5C5'>2022.10 ~ 2022.11 FastCampus - 30개 프로젝트로 배우는 프론트엔드 with. React</AboutText>
                    <AboutText>강의 선정이유</AboutText>
                    <AboutText>: React프레임워크를 선택한 이후 독학을 통해 익힌것은 많았지만</AboutText>
                    <AboutText> 다양한 프로젝트를 경험하는 것 만으로도 코드에 대한 이해와 활용에 도움이 되는 것을 알기에 강의를 선택해 듣게 되었습니다.</AboutText>
                    <AboutText>강의 후기</AboutText>
                    <AboutText>: 다양한 프로젝트를 경험해 볼수 있었고 현업에서 활용할 수 있는 Component, Kakao API 등 도움이 되는 활용법들을 익힐수 있었습니다.</AboutText>
                    <AboutText> </AboutText>
                </AboutTextContainer>
                <Type4>BackEnd</Type4>
                <AboutTextContainer>
                    <AboutText color='B5D5C5'>2022.11 ~ 2023.01 Korea It - 리눅스 마스터 1,2</AboutText>
                    <AboutText>강의 선정이유</AboutText>
                    <AboutText>: 제가 강의를 선정한 이유는 두가지가 있습니다.</AboutText>
                    <AboutText> 첫번째는 FrontEnd는 BackEnd가 없을때 빛을 발할수 없기 때문입니다.</AboutText>
                    <AboutText> 간단한 프로젝트를 진행하더라도 제작시 필요한 이미지나 데이터를 가지고 있는 BackEnd가 없을경우 Client에게는 무겁지만 사용할 곳은 없는 프로젝트가 됩니다.
                            <br/> 또한 완성된 프로젝트를 포스팅 하거나 혹은 자신의 사이트를 운영하게 된다면 BackEnd의 중요성은 한없이 올라가기 때문에 강의를 선택하게 되었습니다.
                    </AboutText>
                    <AboutText> 두번째는 전공 대학교를 나오지 않았기 때문입니다.</AboutText>
                    <AboutText> 아무리 정보통신 학과를 나왔다고는 하지만 전공 대학교에서 교육을 받은 분들과 비교한다면 많은 부분에서 Network 지식, 서버의 이해가 부족하다고 생각했습니다.
                            <br/> 때문에 부족한 부분을 보충하기 위해 강의를 선택하게 되었습니다.
                    </AboutText>
                    
                    <AboutText>강의 후기</AboutText>
                    <AboutText>: </AboutText>
                    <AboutText> </AboutText>
                </AboutTextContainer>
                <AboutTextContainer>
                    <AboutText color='B5D5C5'>2019.10.14 ~ 2019.10.23 생활코딩 - 자바야학</AboutText>
                    <AboutText>강의 선정이유</AboutText>
                </AboutTextContainer>
                <AboutImages>
                    <AboutImage style={{backgroundColor:'white'}} src='https://blog.kakaocdn.net/dn/d0l1Pv/btqGmONiPmW/OluDzrKeEx79dtll0GFVik/img.png' alt=''/>
                    <AboutImage src='data:image/jpeg;base64,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w2g7V6i1LZCChXcW7VplR5oXtH8ZN8k+TdxpD3GaQ7Kanrn1iNyj0Df6svVNAoCgAAbgBIZc1sk7lSlIrHD6VQBgDA7hPqIkmZITa+zrmq4NG8NBNOCgoo+Tk5bUxyNxAx6JNxApmzeSN1b0ko0toFUQEIDbU2K5JJwSc9sttJCEAZtRAAJxjJxvOBwz3TmiBU6PIWgg0rXvFTJPRrdVFpjUSxAVSMDJPvne5PbJqW9W7dypFeuayaSSQppouGyBg5U8MyeiBD7a5P0bso1TWrpkLUpO1NwG85dSkHScDIkfccmgtawNuqJRtWqZTJzipSKjTuOo5OTkjv3y0RASJ2nsgV69vWLFTbuzgAAhtaFcHu45ktEBERAiuT2yVtLdbdWLhWqNlgAf5yo9QjA7i2PZO/Xoq6sjAMrAqykZBBGCCO0ETmiBXdn8k7e3LPSDlyhpIatR30If+WmonQucbh3TscktmPa2NC2qFS9NArFCSuQTwJAOPZJqIEUNiUDc+VsmurjSrOzMEGMHo1Y4TPaVAzOre7Id9o292CuilSq02BJ1ZqFNOBjBHVOd4k/EDq39mlak9GoNSOpR1yRlWGCMjeNx7JV9o8hqJo6KBZW1UmzVq1agC06iuVAdmC5043DulyiBBclNlPa0XpuVJatWqjSSRpqVGZeIG/B3z82tyXoXFbyh2rJU0CkWo1np5QMzBTpIzvYyeiBU15LdFWsOgwKNq1csHYlz0yOoxu63WftI3S2REBERAREQEREBERAREQEREBERAREQE/CJ+xAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=' alt=''/>
                    <AboutImage src='./dataImages/java-completion.png' alt=''/>   
                </AboutImages>
            </Abouts>
        </Container>
    )
}

export default AboutPage