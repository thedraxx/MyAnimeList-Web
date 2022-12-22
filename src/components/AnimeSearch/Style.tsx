import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

export const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${Colors.tertiary};
    padding: 1rem;
`

export const ContainerAnimeLikeThis = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1rem 0;
    padding: 1rem;
    background-color: ${Colors.tertiary};
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    justify-items: center;
    align-items: center;
    @media (max-width: 768px) {
        margin: 0 0;
        padding: 0 0;
        grid-template-columns: repeat(1, 1fr);
    }

`;


export const Image = styled.img`
    width: 70%;
    height: auto;
    border-radius: 5px;

    @media (max-width: 1600px) {
        width: 100%;
    }
`

export const Button = styled.button`    
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;

    @media (max-width: 1600px) {
        padding: 3rem;
    }

    &:hover{
        background-color: ${Colors.search};
        border-radius: 5px;
    }

    &:focus{
        outline: none;
        
    }
    
    &:active{
        outline: none;

    }

    &:transition{
        transition: 0.2s;
    }

`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: ${Colors.white};
`