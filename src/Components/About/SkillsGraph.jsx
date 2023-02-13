import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Type2, Type4 } from '../TextFormat';

/** 총 콘텐츠 컨테이너 */
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    background-color: #2b2b2b;
    padding: 40px 20px;
    position: relative;
`;
/** 스킬 컨테이너 */
const Skill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    text-align: center;
    width: 80%;
    padding: 0 0 10px;
    border-bottom: 2px solid gray;
`;
/** 스킬 명 */
const SkillName = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: center;
    font-size: 25px;
    width: 40%;
    white-space: nowrap;
`;
/** 스킬 그래프 */
const SkillGraph = styled.div`
    position: relative;
    border-radius: 20px;
    width: 60%;
    height: 20px;
    max-width: 800px;
    background-color: gray;
`;
/** 스킬 그래프 채우기 */
const SkillGraphInner = styled.div`
    position: absolute;
    border-radius: 20px 0 0 20px;
    top: 0;
    left: 0;
    &.view{
        animation: widthControl 2s ease-in-out;
        width: ${(props)=>{return props.value+'%'}};
        ::after{
            content:'${(props)=>{return props.value+'%'}}';
            position: absolute;
            top: 20px;
            right: 0;
        }
    }
    height: 20px;
    background-color: ${(props)=>{return props.color}};
    @keyframes widthControl {
        from{
            width: 0%;
        }
    }
`;
/** 나의 스킬 그래프 */
function SkillsGraph() {
    useEffect(()=>{
        /** 그래프 컨텐츠 로딩시 시행 */
        let io = new IntersectionObserver((e)=>{
            e.forEach((item)=>{
                if(item.intersectionRatio>0){
                    item.target.classList.add('view');
                }
            })
        },{rootMargin:'-150px'});
        /** 할당 컨텐츠 */
        const list = document.querySelectorAll('#item');
        list.forEach((e)=>{
            io.observe(e);
        })
    },[])
    return (
        <Container>
            <Type2>My Skills</Type2>
            <div style={{width:'80%'}}><Type4>Front End</Type4></div>
            <Skill>
                <SkillName>Javascript</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#F7DF1E' value={80}/></SkillGraph>
            </Skill>
            <Skill>
                <SkillName>Typescript</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#3178C6' value={60}/></SkillGraph>
            </Skill>
            <Skill>
                <SkillName>css</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#1572B6' value={80}/></SkillGraph>
            </Skill>
            <Skill>
                <SkillName>React</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#61DAFB' value={75}/></SkillGraph>
            </Skill>
            <Skill>
                <SkillName>Styled-Component</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#DB7093' value={70}/></SkillGraph>
            </Skill>
            <Skill>
                <SkillName>electron</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#47848F' value={50}/></SkillGraph>
            </Skill>
            <div style={{width:'80%'}}><Type4>Back End</Type4></div>
            <Skill>
                <SkillName>Linux</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#FCC624' value={70}/></SkillGraph>
            </Skill>
            <Skill>
                <SkillName>NodeJS</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#339933' value={80}/></SkillGraph>
            </Skill>
            <Skill>
                <SkillName>Mysql & mariaDB</SkillName>
                <SkillGraph><SkillGraphInner id='item' color='#4479A1' value={70}/></SkillGraph>
            </Skill>
        </Container>
    )
}

export default SkillsGraph