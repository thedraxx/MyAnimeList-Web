import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

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
background-color: ${Colors.tertiary};
padding-top: 2rem;
padding-bottom: 2rem;
`

export const ContainerInfo = styled.div`

display: flex;
flex-direction: column;
width: 50%;
height: 100%;
background-color: ${Colors.tertiary};
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
background-color: ${Colors.tertiary};
justify-content: left;
align-items: left;
margin: 0 auto;

`

export const TextName = styled.h1`
color: #ffffff;
font-size: 2rem;
font-weight: 700;
justify-content: left;
align-items: left;
text-align: left;
`

export const TextEpisodes = styled.h3`
color: ${Colors.gray};
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
color: ${Colors.white};
font-size: 1rem;
font-weight: 700;
justify-content: left;
align-items: left;
align-self: flex-start;
margin-left: 0.3rem;
`

export const ContainerSynopsis = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: left;
align-self: flex-start;
padding-bottom: 1rem;

`

export const TextSynopsis = styled.h1`
color: ${Colors.white};
font-size: 1rem;
font-weight: 500;
justify-content: left;
align-items: left;
align-self: flex-start;
`

export const ContainerVideo = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
align-items: right;
align-self: right;
padding-bottom: 0rem;
margin-left: 5rem;
margin-top:-2rem;

@media (max-width: 1600px) {
    display: none;
}

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
color: ${Colors.white};
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
align-self: center;
padding: 0.5rem;
color: ${Colors.primary};
margin-left: 1rem;
`

export const ContainerSimilarAnimes = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
padding: 1rem;
tertiary: '#000000';
`

export const DivNothing = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
padding: 0;
background-color: ${Colors.white};
`