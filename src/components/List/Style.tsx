import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

export const ImageList = styled.img`
    width:  150px;
    height: 200px;;

    @media (max-width: 1600px){
        width:  100%;
        height: auto;
    }


`;

export const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: #fff;
    font-size: 2rem;
    margin: 0 1rem;
    transition: 0.3s ease-in-out;
`
export const DivList = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Colors.tertiary};
`

export const TitleAnime = styled.h1`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${Colors.white};
`