import React, { useState } from 'react';
import styled from '@emotion/styled';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Size1Container = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 6px 7px 10px 2px black;
    position: relative;
    width: 800px;
    height: 300px;
    background-image: ${(props)=>{return 'url('+props.imgsrc+')'}};
    background-color: black;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: 4px solid ${(props)=>{return '#'+props.borderColor}};
    border-radius: 20px;
    margin: 20px 0;
    :hover{
        animation: fadein 0.2s linear both;
    }
    @keyframes fadein {
        from{
            scale: 1;
        }
        to{
            scale:1.008;
        }
    }
`;
const Size1Title = styled.div`
    user-select: none;
    font-size: 30px;
    font-family: 'budae';
    z-index: 1;
    ${(props)=>{return props.description?{border:'5px solid transparent',padding:'5px 10px'}:{border:'5px solid white',padding:'5px'}}}
`;
const Size1Arrow = styled.div`
    font-size: 60px;
    font-weight: bold;
    z-index: 1;
`;
const Size1ImageBlur = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #2b2b2b;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

function ContentsButtonSize1({children,imgsrc,borderColor}) {
    const [description,setDiscription] = useState(true);
    return (
        <Size1Container
        borderColor={borderColor}
        imgsrc={imgsrc}
        onMouseOver={()=>{setDiscription(false)}} 
        onMouseOut={()=>{setDiscription(true)}}
        >
            <Size1ImageBlur/>
            <Size1Title description={description}>{children}</Size1Title>
            <Size1Arrow>ㅡ</Size1Arrow>
        </Size1Container>
    )
}

export {ContentsButtonSize1}