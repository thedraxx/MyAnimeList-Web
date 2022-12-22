import React, { useContext, useEffect, useState } from 'react'
import { Container, ContainerRecomendations, Linear1, Title } from './Style'
import animeAPI from '../../api/AnimeAPI'
import { Animes } from '../../interfaces/AnimeRec'
import Loading from '../Loading/Loading'
import List from '../List/List'
import { FetchContext } from '../../context/FetchContext'

const Upcoming = () => {
  const [AnimeUpcoming, setAnimeUpcoming] = useState<Animes>()
  const { FetchCarrousel, HandleFetchUpcoming } = useContext(FetchContext)

  useEffect(() => {
    HandleFetchUpcoming(false)
    getAnimeUpcoming()
  }, [FetchCarrousel])

  const getAnimeUpcoming = async () => {
    if (FetchCarrousel) {
      try {
        const resp = await animeAPI.get('seasons/upcoming')
        setAnimeUpcoming(resp.data)
        HandleFetchUpcoming(true)
      } catch (error) {
        console.log({ error })
      }
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
              <List Anime={AnimeUpcoming.data} />
            </Container>
          </ContainerRecomendations>
        )
      }

    </>


  )
}

export default Upcoming