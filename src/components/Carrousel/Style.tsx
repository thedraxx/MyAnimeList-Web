import styled from 'styled-components';

export const ContainerBanner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fd0000;
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
`;

export const CustomImageGalery = styled.img`
    width: 320px;
    height: 500px;
    position: relative;
    border-radius: 25px;
    object-fit: cover;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
` 

export const Button = styled.button`
    width: 50px;
    background-color: #5a5a5a;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;
`

export const ContainerImageInfo = styled.div`
    flex-direction: row;
    width:50%;
    background-color: #080000;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const ContainerText  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
`

export const TextInfo = styled.h1`
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
`