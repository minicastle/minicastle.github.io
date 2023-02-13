import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Type1, Type2 } from "../TextFormat";
import ParticleContainer from "../Particle/ParticleContainer";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
/** 타이핑 애니메이션 */
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
        0% {
            transform: translateX(0px);
            background-color: black;
        }
        25% {
            background-color: #2b2b2b;
        }
        100% {
            background-color: #2b2b2b;
            transform: translateX(1000px);
        }
    }
`;
/** 환영인사 페이지 */
function SpectorHeader() {
    const [mover1, setMover1] = useState(true);
    const [mover2, setMover2] = useState(true);
    useEffect(() => {
        let moverTimeout1 = setTimeout(() => {
            setMover1(false);
        }, 1800);
        let moverTimeout2 = setTimeout(() => {
            setMover2(false);
        }, 1000);

        return () => {
            clearTimeout(moverTimeout1, moverTimeout2);
        };
    }, []);
    return (
        <Container>
            <Type1>
                Welcome to my portfolio{" "}
                <Typer>
                    <ParticleContainer mover={mover1} />
                </Typer>
            </Type1>
            <Type2>
                made by. Minicastle{" "}
                <Typer>
                    <ParticleContainer mover={mover2} />
                </Typer>
            </Type2>
        </Container>
    );
}

export default SpectorHeader;
