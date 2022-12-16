import React from 'react'
import {ContainerBanner, ContainerImageInfo, CustomImageGalery} from './Style';
import {Datum } from '../../interfaces/GetAnimeTopsInterface';

interface CarrouselAnimeProps {
    anime: Datum;
}

const CarrouselAnime = (anime:CarrouselAnimeProps): JSX.Element => {

    return (
        <>
            <ContainerBanner background={anime.anime.images.webp.large_image_url}></ContainerBanner>
            <ContainerImageInfo>
                        <CustomImageGalery src={anime.anime.images.webp.image_url} alt="Anime Banner" />
            </ContainerImageInfo>
        </>
    ) 
}

export default CarrouselAnime

