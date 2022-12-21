import React, { useEffect, useState } from 'react'
import { Container, ContainerRecomendations, Linear1, Title } from './Style'
import animeAPI from '../../api/AnimeAPI'
import { Animes } from '../../interfaces/AnimeRec'
import Loading from '../Loading/Loading'
import List from '../List/List'

const Upcoming = () => {
  const [AnimeUpcoming, setAnimeUpcoming] = useState<Animes>()

  useEffect(() => {
    setTimeout(() => {
      getAnimeUpcoming()
    }, 700);
  }, [])

  const getAnimeUpcoming = async () => {
    try {
      const resp = await animeAPI.get('seasons/upcoming')
      setAnimeUpcoming(resp.data)
    } catch (error) {
      console.log({ error })
    }
  }
  
  return (

    <>
      {
        !AnimeUpcoming ? <Loading /> : (
          <ContainerRecomendations>
            <Container>
              <Title>Upcoming</Title>
              <Linear1 />
                    <List Anime={AnimeUpcoming.data}/>
            </Container>
          </ContainerRecomendations>
        )
      }

    </>


  )
}

export default Upcoming