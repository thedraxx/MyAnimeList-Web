import React, { useEffect, useState } from 'react'
import { Datum } from '../../interfaces/GetAnimeTopsInterface';
import animeAPI from '../../api/AnimeAPI';
import { AnimeRecomends } from '../../interfaces/AnimeRecomends';
import { Button, ContainerAnimeLikeThis, Image, SuperContainer } from './Style';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

interface Animes {
  animes: Datum
}

const SimilarAnimes = (animes: Animes) => {
  const [anime, setAnime] = useState<AnimeRecomends>()
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      getAnimeLikeThis();
    }, 1000);
  }, [animes])

  const getAnimeLikeThis = async () => {
    try {
      const resp = await animeAPI.get(`anime/${animes.animes.mal_id}/recommendations`);
      setAnime(resp.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <SuperContainer>
      <h1>Similar Animes</h1>
      <ContainerAnimeLikeThis>
        {
          !anime ? <Loading /> : (
            anime.data.map((anime, index) => {
              return (
                <Button
                  onClick={() => navigate("/Anime", {
                    state: {
                      anime: anime.entry.mal_id
                    }
                  })}
                >
                  <Image key={index} src={anime.entry.images.webp.large_image_url} alt={anime.entry.title} />
                </Button>
              )
            })
          )



        }
      </ContainerAnimeLikeThis>
    </SuperContainer>
  )
}

export default SimilarAnimes