import styled from 'styled-components';

export const ContainerSearch = styled.div`\
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #000000;
    padding-top: 10vh;
    flex-direction: column;
`;

export const Inputs = styled.input`
    width: 100%;
    height: 100%;
    background-color: #000000;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    ::placeholder {
        color: #ffffff;
        font-size: 1.5rem;
    }
    
`
export const Button = styled.input`
    width: 100%;
    height: 100%;
    background-color: #020202;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    ::placeholder {
        color: #ffffff;
        font-size: 1.5rem;
    }
    `
export const ContainerAnimeSearch = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #000000;
    padding-top: 10vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`