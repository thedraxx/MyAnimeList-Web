import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

export const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
    padding: 1rem;
`

export const ContainerAnimeLikeThis = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 0.5rem 0;
    padding: 2rem;
    background-color: #040404;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    justify-items: center;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;


export const Image = styled.img`
    width: 65%;
    border-radius: 5px;

    @media (min-width: 268px) and (max-width: 1600px) {
        width: 100%;
    }
`

export const Button = styled.button`    
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;


    &:hover{
        background-color: ${Colors.search};
        border-radius: 5px;
        padding: 0rem;
    }

    &:transition{
        transform: 0.5s;
    }

`