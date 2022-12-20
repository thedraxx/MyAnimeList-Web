import React, { useEffect, useState } from 'react'
import { Container, ContainerRecomendations, Linear2, Title } from './Style'
import animeAPI from '../../api/AnimeAPI'
import { Animes } from '../../interfaces/AnimeRec'
import Loading from '../Loading/Loading'
import List from '../List/List'

const TopAnime = () => {
  const [AnimeTops, setAnimeTops] = useState<Animes>()

  useEffect(() => {
    setTimeout(() => {
      getAnimeTops()
    }, 1000);
  }, [])

  const getAnimeTops = async () => {
    try {
      const resp = await animeAPI.get('anime')
      setAnimeTops(resp.data)
    } catch (error) {
      console.log({ error })
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
                    <List Anime={AnimeTops.data}/>
            </Container>
          </ContainerRecomendations>
        )
      }

    </>
  )
}

export default TopAnime