import React from 'react'
import { useLocation } from 'react-router-dom';
import { Datum } from '../../interfaces/GetAnimeTopsInterface';
import { ContainerAnime, ContainerGenre, ContainerInfo, ContainerLeft, ContainerStars, ContainerSynopsis, ContainerTextGenre, SuperContainerInfoAnime, TextEpisodes, TextGenre, TextMedia, TextName, TextSynopsis } from './Style';
import CarrouselAnime from '../../components/Cover/Cover';
import { IonButton, IonIcon } from '@ionic/react';

interface CustomizedState {
  anime: Datum
}


const Anime = () => {
  const location = useLocation()
  const state = location.state as CustomizedState


  const rating = Math.round(state.anime.score)


  return (
    <ContainerAnime>
      <CarrouselAnime anime={state.anime} />
      <SuperContainerInfoAnime>
        <ContainerInfo>
          <ContainerLeft>
            <TextName>
              {state.anime.title}
            </TextName>
            <TextEpisodes>
              {state.anime.episodes} Episodes
            </TextEpisodes>
            <ContainerStars>
              {
                [...Array(rating)].map((e, i) => {
                  return <IonIcon name="star" color="light" />
                })
              }
              <TextMedia>Media: {state.anime.score}</TextMedia>
            </ContainerStars>
            <ContainerSynopsis>
              <TextSynopsis>
                {state.anime.synopsis}
              </TextSynopsis>
            </ContainerSynopsis>
            <ContainerGenre>
                {state.anime.genres.map((genre, index) => {
                  return <ContainerTextGenre key={index}><TextGenre>{genre.name}</TextGenre></ContainerTextGenre>
                })}
            </ContainerGenre>
          </ContainerLeft>
        </ContainerInfo>
      </SuperContainerInfoAnime>
    </ContainerAnime>
  )
}

export default Anime