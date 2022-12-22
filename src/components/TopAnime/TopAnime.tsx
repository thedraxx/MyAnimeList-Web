import React, { useContext, useEffect, useState } from 'react'
import { Container, ContainerRecomendations, Linear2, Title } from './Style'
import animeAPI from '../../api/AnimeAPI'
import { Animes } from '../../interfaces/AnimeRec'
import Loading from '../Loading/Loading'
import List from '../List/List'
import { FetchContext } from '../../context/FetchContext'

const TopAnime = () => {
  const [AnimeTops, setAnimeTops] = useState<Animes>()
  const { FetchBanner, HandleFetchTopAnime } = useContext(FetchContext)

  useEffect(() => {
    HandleFetchTopAnime(false)
    getAnimeTops()
  }, [FetchBanner])

  const getAnimeTops = async () => {
    if (FetchBanner) {
      try {
        const resp = await animeAPI.get('anime')
        setAnimeTops(resp.data)
        HandleFetchTopAnime(true)
      } catch (error) {
        console.log({ error })
      }
    }
  }

  return (
    <>
      {
        !AnimeTops ? <Loading /> : (
          <ContainerRecomendations>
            <Container>
              <Title>Tops</Title>
              <Linear2 />
              <List Anime={AnimeTops.data} />
            </Container>
          </ContainerRecomendations>
        )
      }

    </>
  )
}

export default TopAnime