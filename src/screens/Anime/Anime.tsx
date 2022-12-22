import { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import { Datum } from '../../interfaces/GetAnimeTopsInterface';
import { ContainerAnime, ContainerGenre, ContainerInfo, ContainerLeft, ContainerSimilarAnimes, ContainerStars, ContainerSynopsis, ContainerTextGenre, ContainerVideo, DivNothing, SuperContainerInfoAnime, TextEpisodes, TextGenre, TextMedia, TextName, TextSynopsis } from './Style';
import CarrouselAnime from '../../components/Cover/Cover';
import ReactPlayer from 'react-player';
import SimilarAnimes from '../../components/SimilarAnimes/SimilarAnimes';
import animeAPI from '../../api/AnimeAPI';
import Loading from '../../components/Loading/Loading';
import { AiFillStar } from 'react-icons/ai';

const Anime = () => {
  const [animeInfo, setAnimeInfo] = useState<Datum>()
  const { id } = useParams();

  useEffect(() => {
    getAnime()
  }, [id])


  const getAnime = async () => {
    try {
      const resp = await animeAPI.get(`anime/${id}`);
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
                      {
                        animeInfo.episodes === null ? 'Unknown Episodes' : `${animeInfo.episodes} Episodes`
                      }
                    </TextEpisodes>
                    <ContainerStars>
                      {
                        animeInfo.score === null ? <TextMedia>Media: Unknown</TextMedia> :
                          [...Array(Math.round(animeInfo.score))].map((e, i) => {
                            return <AiFillStar color="white" />
                          })
                      }
                      <TextMedia>Media: {animeInfo.score}</TextMedia>
                    </ContainerStars>

                    {
                      !animeInfo.synopsis ? <DivNothing /> :
                        <ContainerSynopsis>
                          <TextSynopsis>
                            {
                              animeInfo.synopsis === null ? null : animeInfo.synopsis
                            }

                          </TextSynopsis>
                          <ContainerVideo>
                            {
                              animeInfo.trailer === null ? <div /> :
                                <ReactPlayer
                                  // @ts-ignore
                                  url={animeInfo.trailer.url}
                                  controls
                                  width='455px'
                                  height='455px'
                                />
                            }

                          </ContainerVideo>
                        </ContainerSynopsis>
                    }


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