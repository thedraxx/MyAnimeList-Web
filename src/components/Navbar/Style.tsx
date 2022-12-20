import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

export const ContainerNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${Colors.primary};
    padding: 0 20px;
    height: 60px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 99;
    overflow: hidden;
`;


export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
`


export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 0 100px;

    @media (max-width: 1600px){
        margin: 0px;   
    }
`

export const Text = styled.h1`
    font-size: 35px;
    font-weight:600;
    color: ${Colors.white};
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 0 0 10px;

    @media (max-width: 1600px){
        font-size: 25px;
    }

    &:hover{
        color: ${Colors.secondary};
    }
`