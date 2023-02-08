import React from 'react';
import styled from '@emotion/styled';

const Text1 = styled.div`
    color: white;
    font-size: 70px;
    font-family: 'ok';
    position: relative;
    width: max-content;
`;
const Text2 = styled.div`
    color: white;
    font-size: 50px;
    font-family: 'ok';
    position: relative;
    width: max-content;
`;
const Text3 = styled.div`
    color: white;
    font-size: 50px;
    font-family: 'LineSeed';
    position: relative;
    width: max-content;
`;
const Text4 = styled.div`
    color: white;
    font-size: 30px;
    font-family: 'LineSeed';
    position: relative;
    width: max-content;
`;

function Type1({children}) {
    return (
        <Text1>{children}</Text1>
    )
}
function Type2({children}) {
    return (
        <Text2>{children}</Text2>
    )
}
function Type3({children}){
    return (
        <Text3>{children}</Text3>
    )
}
function Type4({children}){
    return (
        <Text4>{children}</Text4>
    )
}


export {Type1, Type2, Type3, Type4}