import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 5rem;
    margin-top: 4rem;

    @media screen and (max-width: 1600px) {
        width: 100%;
        padding: 0rem;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 520px;
    justify-self: center;
    align-self: center;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 300px;
    }

`

export const Button = styled.button`
    width: 20%;
    border: none;
    background: none;
    cursor: pointer;

    @media screen and (max-width: 1600px) {
        width: 100%;
    }
`