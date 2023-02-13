import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SpectorHeader from './SpectorHeader';
import SpectorSub1 from './SpectorSub1';
import SpectorSub2 from './SpectorSub2';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props)=>{return props.load?{backgroundColor:"black"}:{animation:"bcolorchange 0.5s linear",backgroundColor:'#2B2B2B'}}};
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    @keyframes bcolorchange {
        0%{
            background-color: black;
        }
        100%{
            background-color: #2B2B2B;
        }
    }
`;
/** 로딩시 화면 전환 이펙트 */
const Spector = styled.div`
    position: absolute;
    top:0;
    left: 0;
    display: ${(props)=>{return props.load?'flex':'none'}};
    animation: spectator 0.7s linear;
    animation-delay: ${(props)=>{return props.time+'s'}};
    @keyframes spectator {
        0%{
            transform: translateX(0px);
        }
        100%{
            transform: translateX(-2700px);
        }
    }
`;
/** /로딩시 처음으로 보여질 화면 */
function Spectors() {
    const [frame,setFrame] = useState('set1');
    const [load1,setLoad1] = useState(true);
    const [load2,setLoad2] = useState(true);
    useEffect(()=>{
        let loadTimeout1 = setTimeout(()=>{
            setLoad1(false);
        },690);
        let loadTimeout2 = setTimeout(()=>{
            setLoad2(false);
        },890);
        let frameTimeout1 = setTimeout(()=>{
            setFrame('set2');
        },5500);
        let frameTimeout2 = setTimeout(()=>{
            setFrame('set3');
        },13000)

    return ()=>{
        clearTimeout(loadTimeout1,loadTimeout2,frameTimeout1,frameTimeout2);
    }
    },[])
    return (
        <Container load={load2}>
            {load2?
            <>
                <Spector load={load1}>
                    <img src='./images/image 1.png' style={{height:"100%",opacity:'0.5'}}/>
                </Spector>
                <Spector load={load2} time={0.3}>
                    <img src='./images/image 2.png' style={{height:"100%",opacity:'0.5'}}/>
                </Spector>
            </>:
            frame==='set1'?
            <SpectorHeader></SpectorHeader>:
            frame==='set2'?
            <SpectorSub1/>:
            <SpectorSub2/>
            }
        </Container>
    )
}

export default Spectors
