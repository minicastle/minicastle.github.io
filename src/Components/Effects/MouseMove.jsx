import React, { useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CanvasBase = styled.div`
    width: 100%;
    height: 100%;
`;

function MouseMove() {
    const [mouse,setMouse] = useState({x:undefined,y:undefined});
    useEffect(()=>{
        const canvas = document.getElementById('#canvas');
        const ctx = canvas.getContext('2d');
        let spots = [];
        let hue = 0;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.addEventListener('mousemove',function(event){
            setMouse({x:event.x,y:event.y});
            for(let i = 0;i<3;i++){
                spots.push(particles());
            }
        })
        
    },[]);

    return (
        <CanvasBase id='canvas'></CanvasBase>
    )
}

export default MouseMove