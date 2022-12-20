import React, { useEffect, useState } from 'react'
import animeAPI from '../../api/AnimeAPI'
import Loading from '../Loading/Loading'
import { Button, Container, Image } from './Style'
import { AnimeRandomInterface } from '../../interfaces/AnimeRandomInterface'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const [AnimeBanner, setAnimeBanner] = useState<AnimeRandomInterface>()
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            getAnimeBanner()
        }, 1500);
    }, [])

    const getAnimeBanner = async () => {
        try {
            const resp = await animeAPI.get(`random/anime`);
            setAnimeBanner(resp.data);
        } catch (error) {
            console.log({ error });
        }
    };
    return (
        <>
            {
                !AnimeBanner ? <Loading /> : (
                    <Container>
                        <Button
                            onClick={() => navigate("/Anime", { 
                                state: {
                                    anime: AnimeBanner.data.mal_id
                                }
                            })}
                        >
                        <Image src={AnimeBanner?.data.images.webp.large_image_url} alt={AnimeBanner.data.title} />
                        </Button>
                    </Container>
                )
            }
        </>
    )
}

export default Banner