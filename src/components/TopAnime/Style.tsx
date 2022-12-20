import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

export const ContainerRecomendations = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${Colors.tertiary};
    padding-top: 5vh;
`;  

export const Container = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.tertiary};
    padding: 2vh;
`


export const ContainerDivImg = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.tertiary};
    padding: 3vh;
    flex-direction: row;
`

export const Image = styled.img`
    width:  150px;
    height: auto;
`

export const Title = styled.h1`
    font-size: 2rem;
    color: ${Colors.white};
    font-weight: 600;
    margin: 0;
`

export const Linear2 = styled.div`
    width: 100%;
    height: 5px;
    background-color: ${Colors.secondary};
    margin: 2vh 0;
`