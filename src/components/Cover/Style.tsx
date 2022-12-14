import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

export const ContainerBanner = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props: { background: string }) => props.background } );
    filter: blur(10px);
    transform: scale(1); 
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    transition: all 0.7s ease;
    background-color: ${Colors.tertiary};

    @media (min-width: 800px) and (max-width: 1000px) {
        height: 70vh;
    }
    @media (min-width: 1000px) and (max-width: 1900px) {
        height: 75vh;
    }

`;

export const CustomImageGalery = styled.img`
    width: 300px;
    height: 450px;
    position: relative;
    border-radius: 25px;
    object-fit: cover;
    transition: all 0.3s ease;
    z-index: 1;
    filter: blur(0px);
    margin-top: 10vh;

    @media (max-width: 1600px) {
        width: 320px;
        height: 500px;
        position: relative;
        border-radius: 25px;
        object-fit: cover;
        padding: 20px;
    }
`



export const ContainerImageInfo = styled.div`
    width: 320px;
    height: 500px;
    position: absolute;
    border-radius: 25px;
    object-fit: cover;
    transition: all 0.3s ease;
    filter: blur(0px);
    margin-top: 0vh;
    border-radius: 25px;

    @media (max-width: 1600px) {
        width: 100%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
    }
`

