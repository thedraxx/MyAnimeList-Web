import styled from 'styled-components';

export const ContainerBanner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 120px;
    background-color: ${(props:any ) => props.color};
    filter: blur(calc(var(--size) / 5));
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    transition: all 0.7s ease;

    @media (max-width: 1600px) {
        padding: 20px;
    }

`;

export const CustomImageGalery = styled.img`
    width: 320px;
    height: 500px;
    position: relative;
    border-radius: 25px;
    object-fit: cover;

    @media (max-width: 1600px) {
        width: 320px;
        height: 500px;
        position: relative;
        border-radius: 25px;
        object-fit: cover;
        padding: 20px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;

    @media (max-width: 1600px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: absolute;
        z-index: 1;
    }

` 

export const Button = styled.button`
    width: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;
`

export const ContainerImageInfo = styled.div`
    flex-direction: row;
    width:50%;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

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

export const ContainerText  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
    width: 100%;

    @media (max-width: 1600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 90%;
    }
`

export const TextTitle = styled.h1`
    color: #ffffff;
    font-size: 45px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 1600px) {
        font-size: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }
`

export const TextInfo = styled.h1`
    color: #ffffff;
    font-size: 25px;
    font-weight:550;
    margin: 0;
    padding: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media (max-width: 1600px) {
       display: none; 
       font-weight:bold;
    }
`

export const ButtonImage = styled.button`
    background-color: transparent;
    border: none;
`