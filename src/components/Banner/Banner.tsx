import React, { useEffect, useState } from 'react'
import animeAPI from '../../api/AnimeAPI'
import { Animes, Datum } from '../../interfaces/AnimeRec'
import Loading from '../Loading/Loading'
import { Container, Image } from './Style'
import { AnimeRandomInterface } from '../../interfaces/AnimeRandomInterface'

const Banner = () => {
    const [AnimeBanner, setAnimeBanner] = useState<AnimeRandomInterface>()

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
                        <Image src={AnimeBanner?.data.images.webp.large_image_url} alt={AnimeBanner.data.title} />
                    </Container>
                )
            }
        </>


    )
}

export default Banner