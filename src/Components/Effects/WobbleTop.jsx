import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: inline-block;
    transform-origin: 0 100%;
    @include hideTapHighlightColor();
    @include hardwareAccel();
    @include improveAntiAlias();
    &:hover {
        animation-name: wobble-top;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
    }

    @keyframes wobble-top {
	16.65% {
		transform: skew(-12deg);
	}
	33.3% {
		transform: skew(10deg);
	}
	49.95% {
		transform: skew(-6deg);
	}
	66.6% {
		transform: skew(4deg);
	}
	83.25% {
		transform: skew(-2deg);
	}
	100% {
		transform: skew(0);
	}
}
`;


function WobbleTop({children}) {
    return (
        <Container>{children}</Container>
    )
}

export default WobbleTop