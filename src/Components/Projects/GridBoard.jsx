import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Type2, Type3, Type4 } from '../TextFormat';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1030px;
    width: 100%;
    gap: 30px;
`;
/** 게시판 형태의 아이템 콘테이너 */
const BoardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 30px;
    color: white;
    flex-flow: row wrap;
`;
/** 게시판 아이템 */
const BoardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    gap: 20px;
    max-width: 500px;
`;
const BoardItemImage = styled.img`
    margin: 0 10px;
    width: 100%;
`;

function GridBoard({clone=[],original=[]}) {
    const Generater = useCallback((e)=>{
        let contents = [];
        for(let i = 0;i<e.length;i++){
            contents.push(
                <BoardItem>
                    <Type4>{e[i].title}</Type4>
                    <BoardItemImage src={e[i].img} alt=''/>
                </BoardItem>
            )
        }
        return contents
    },[]);
    return (
        <Container>
            {clone.length===0?"":
            <>
                <Type2>Clones</Type2>
                <BoardContainer>
                    {Generater(clone)}
                </BoardContainer>
            </>
            }
            {original.length===0?"":""}
        </Container>
    )
}

export default GridBoard