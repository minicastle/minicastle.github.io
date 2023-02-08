import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    width: 100%;
    position: relative;
    border-right: 3px solid #93C6E7;
    animation: ${(props)=>{return `Typing ${props.time}s steps(${Number(props.length)}) normal`}},
    Blink 0.6s normal infinite;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    @keyframes Typing {
        0%{
            width: 0px;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes Blink {
        0%{
            border-right-color: #93C6E7;
        }
        100%{
            border-right-color: transparent;
        }
    }
`;

function BlinkContainer({children,time}) {
    let childrenLength = (children.props.children).length;
    return (
        <Container length={childrenLength} time={time}>{children}</Container>
    )
}

export default BlinkContainer