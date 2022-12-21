import styled from 'styled-components';


export const Container = styled.div`
   justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row; 
    margin-top: 25px;
`;

export const Image = styled.img`
    width: 100%;
    height: 405px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    background-position: center;
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
   
`

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`

export const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
`

export const TitleAnime = styled.h1`
    color: #fff;
    font-size: 1.6rem;
`

export const ContainerTitleInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`