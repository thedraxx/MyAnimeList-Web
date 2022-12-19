import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Datum } from '../../interfaces/GetAnimeTopsInterface';
import { ContainerAnime, ContainerGenre, ContainerInfo, ContainerLeft, ContainerSimilarAnimes, ContainerStars, ContainerSynopsis, ContainerTextGenre, ContainerVideo, SuperContainerInfoAnime, TextEpisodes, TextGenre, TextMedia, TextName, TextSynopsis } from './Style';
import CarrouselAnime from '../../components/Cover/Cover';
import { IonIcon } from '@ionic/react';
import ReactPlayer from 'react-player';
import SimilarAnimes from '../../components/SimilarAnimes/SimilarAnimes';
import animeAPI from '../../api/AnimeAPI';
import Loading from '../../components/Loading/Loading';

interface CustomizedState {
  anime: string /* Recibe Id of the ANIME */
}

const Anime = () => {
  const [animeInfo, setAnimeInfo] = useState<Datum>()
  const location = useLocation()
  const state = location.state as CustomizedState

  console.log(state.anime)

  useEffect(() => {
    getAnime()
  }, [state])


  const getAnime = async () => {
    try {
      const resp = await animeAPI.get(`anime/${state.anime}`);
      setAnimeInfo(resp.data.data);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      {
        !animeInfo ? <Loading /> : (
          <>
            <ContainerAnime>
              <CarrouselAnime anime={animeInfo} />
              <SuperContainerInfoAnime>
                <ContainerInfo>
                  <ContainerLeft>
                    <TextName>
                      {animeInfo.title}
                    </TextName>
                    <TextEpisodes>
                      {animeInfo.episodes} Episodes
                    </TextEpisodes>
                    <ContainerStars>
                      {
                        [...Array(Math.round(animeInfo.score))].map((e, i) => {
                          return <IonIcon name="star" color="light" />
                        })
                      }
                      <TextMedia>Media: {animeInfo.score}</TextMedia>
                    </ContainerStars>
                    <ContainerSynopsis>
                      <TextSynopsis>
                        {animeInfo.synopsis}
                      </TextSynopsis>
                      <ContainerVideo>
                        <ReactPlayer
                          url={animeInfo.trailer.url}
                          controls
                          width='450px'
                          height='100%'
                        />
                      </ContainerVideo>
                    </ContainerSynopsis>
                    <ContainerGenre>
                      {animeInfo.genres.map((genre, index) => {
                        return <ContainerTextGenre key={index}><TextGenre>{genre.name}</TextGenre></ContainerTextGenre>
                      })}
                    </ContainerGenre>
                  </ContainerLeft>
                </ContainerInfo>
              </SuperContainerInfoAnime>
            </ContainerAnime>
            <ContainerSimilarAnimes>
              <SimilarAnimes animes={animeInfo} />
            </ContainerSimilarAnimes>
          </>
        )
      }


    </>
  )
}

export default Anime