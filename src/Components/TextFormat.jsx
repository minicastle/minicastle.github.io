import React from 'react';
import styled from '@emotion/styled';

const Text1 = styled.div`
    color: ${(props)=>{return '#'+props.color}};
    font-size: 70px;
    font-family: 'ok';
    position: relative;
    width: max-content;
    @media screen and (max-width:600px){
        font-size: 50px;
    };
`;
const Text2 = styled.div`
color: ${(props)=>{return '#'+props.color}};
    font-size: 50px;
    font-family: 'ok';
    position: relative;
    width: max-content;
    @media screen and (max-width:600px){
        font-size: 35px;
    };
`;
const Text3 = styled.div`
    color: ${(props)=>{return '#'+props.color}};
    font-size: 50px;
    font-family: 'LineSeed';
    position: relative;
    width: max-content;
    @media screen and (max-width:600px){
        font-size: 35px;
    };
`;
const Text4 = styled.div`
    color: ${(props)=>{return '#'+props.color}};
    font-size: 30px;
    font-family: 'LineSeed';
    position: relative;
    width: max-content;
    @media screen and (max-width:500px){
        font-size: 20px;
    };
`;
/** 텍스트 포멧 1  */
function Type1({children,color='ffffff'}) {
    return (
        <Text1 color={color}>{children}</Text1>
    )
}
/** 텍스트 포멧 2  */
function Type2({children,color='ffffff'}) {
    return (
        <Text2 color={color}>{children}</Text2>
    )
}
/** 텍스트 포멧 3  */
function Type3({children,color='ffffff'}){
    return (
        <Text3 color={color}>{children}</Text3>
    )
}
/** 텍스트 포멧 4  */
function Type4({children,color='ffffff'}){
    return (
        <Text4 color={color}>{children}</Text4>
    )
}


export {Type1, Type2, Type3, Type4}