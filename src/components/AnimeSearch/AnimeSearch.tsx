import React, { useEffect, useState } from 'react'
import animeAPI from '../../api/AnimeAPI'
import { AnimeSearchInterface, DatumSearch } from '../../interfaces/AnimeSearchInterface'
import SimilarAnimes from '../SimilarAnimes/SimilarAnimes'
import { Button, ContainerAnimeLikeThis, Image, SuperContainer } from './Style'
import { useNavigate } from 'react-router-dom';

interface AnimeSearchProps {
    name: string ,
    PressEnter: boolean
}

const AnimeSearch = ({ name, PressEnter }: AnimeSearchProps) => {
    const [animeSearchNow, setAnimeSearchNow] = useState<DatumSearch[]>()
    const navigate = useNavigate();

    console.log(typeof name)

    useEffect(() => {
        if (PressEnter){
            getAnimeSearch()
        }
    }, [PressEnter])

    const getAnimeSearch = async () => {
        const resp = await animeAPI.get<AnimeSearchInterface>(`/anime?q=${name}`);
        console.log(resp)
        setAnimeSearchNow(resp.data.data)
    }

    return (
        !name ? <h1>{name}</h1> : (
            <SuperContainer>

                <ContainerAnimeLikeThis>
                    {
                        animeSearchNow?.map((anime, index) => {
                            return (
                                <Button
                                    onClick={() => navigate("/Anime", {
                                        state: {
                                            anime: anime.mal_id
                                        }
                                    })}
                                >
                                    <Image key={anime.mal_id} src={anime.images.webp.large_image_url} alt={anime.title} />
                                </Button>
                            )
                        })
                    }
                </ContainerAnimeLikeThis>
            </SuperContainer>
        )

    )
}

export default AnimeSearch