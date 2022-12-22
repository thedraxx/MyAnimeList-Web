import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

interface Props {
    isEnter: boolean;
}

export const ContainerSearch = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${Colors.search};
    padding-top: 10vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 268px)  and (max-width: 1024px) {
        align-items: left;
        justify-content: left;
        align-self: left;
        padding-left: 0px;
    }
`;

export const Inputs = styled.input`
    width: 50%;
    height: 100%;
    display: flex;
    background-color: ${Colors.search};
    border: none;
    outline: none;
    color: ${Colors.white};
    font-size: 1.5rem;
    padding: 0.2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    ::placeholder {
        color: ${Colors.white};
        font-size: 1.5rem;
    }   

    @media (min-width: 268px)  and (max-width: 1024px) {
        width: 90%;
    }

`
export const Button = styled.input`
    width: 100%;
    height: 100%;
    background-color: ${Colors.tertiary};
    border: none;
    outline: none;
    color: ${Colors.white};
    font-size: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    ::placeholder {
        color: ${Colors.white};
        font-size: 1.5rem;
    }
    `
export const ContainerAnimeSearch = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${Colors.tertiary};
    padding-top: 10vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Border = styled.div<Props>`
    width: 50%;
    height: 0.2rem;
    background-color: ${props => props.isEnter ? Colors.secondary : Colors.search};
    margin-bottom: 1rem;

    @media (min-width: 268px)  and (max-width: 1024px) {
        width: 90%;
    }
    
`