import styled from 'styled-components';

export const ContainerAnime = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
`;


export const SuperContainerInfoAnime = styled.div`
flex: 1;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: #fb0707;
z-index: 999;
`

export const ContainerInfo = styled.div`

display: flex;
flex-direction: column;
width: 50%;
height: 100%;
background-color: #000;
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 0 1rem;

@media (max-width: 768px) {
    width: 100%;   
}

`

export const ContainerLeft = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: #000;
justify-content: left;
align-items: left;
margin: 0 auto;

`

export const TextName = styled.h1`
color: #fff;
font-size: 2rem;
font-weight: 700;
justify-content: left;
align-items: left;
text-align: left;
`

export const TextEpisodes = styled.h3`
color: #373737;
font-size: 1rem;
font-weight: 700;
justify-content: left;
align-items: left;
align-self: flex-start;
`

export const ContainerStars = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: left;
align-self: flex-start;
`

export const TextMedia = styled.h1`
color: #fff;
font-size: 1rem;
font-weight: 700;
justify-content: left;
align-items: left;
align-self: flex-start;
margin-left: 1rem;
`

export const ContainerSynopsis = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
align-self: flex-start;
padding-bottom: 1rem;

`

export const TextSynopsis = styled.h1`
color: #fff;
font-size: 1rem;
font-weight: 500;
justify-content: left;
align-items: left;
align-self: flex-start;
`

export const ContainerGenre = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: left;
align-self: flex-start;
flex-wrap: wrap;
`

export const TextGenre = styled.h1`
color: #ffffff;
font-size: 1.1rem;
font-weight: 400;
justify-content: center;
align-items: center;
`
export const ContainerTextGenre = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: flex-start;
padding: 0.2rem;
background-color: #373737;
margin: 0.5rem;
`