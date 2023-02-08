import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Particle from '../Particle/Particle';
import { Type1, Type2 } from '../TextFormat';
import ParticleContainer from '../Particle/ParticleContainer';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Typer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    animation: TyperMover 2s linear;
    @keyframes TyperMover {
        0%{
            transform: translateX(0px);
            background-color: black;
        }
        25%{
            background-color: #2B2B2B;
        }
        100%{
            background-color: #2B2B2B;
            transform: translateX(1000px);
        }
    }
`;
const ParticleContain = styled.div`
    display: ${(props)=>{return props.mover?'flex':'none'}};
    justify-content: center;
    align-items: center;
    position: relative;
`;

function SpectorHeader() {
    const [mover1,setMover1] = useState(true);
    const [mover2,setMover2] = useState(true);
    useEffect(()=>{
        let moverTimeout1 = setTimeout(()=>{
            setMover1(false)
        },1800)
        let moverTimeout2 = setTimeout(()=>{
            setMover2(false)
        },1000)

        return ()=>{
            clearTimeout(moverTimeout1,moverTimeout2)
        }
    },[])
    return (
        <Container>
            <Type1>Welcome to my portfolio <Typer><ParticleContainer mover={mover1}/></Typer></Type1>
            <Type2>made by. Minicastle <Typer><ParticleContainer mover={mover2}/></Typer></Type2>
        </Container>
    )
}

export default SpectorHeader
