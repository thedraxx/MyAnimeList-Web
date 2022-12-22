import { useContext, useEffect, useState } from 'react'
import animeAPI from '../../api/AnimeAPI'
import Loading from '../Loading/Loading'
import { Button, Container, ContainerTitleInfo, Image, Title, TitleAnime } from './Style'
import { useNavigate } from 'react-router-dom';
import { AnimeRecomendations } from '../../interfaces/AnimeRecomendations'
import { FetchContext } from '../../context/FetchContext';

const Banner = () => {
    const [AnimeBanner, setAnimeBanner] = useState<AnimeRecomendations>()
    const navigate = useNavigate();
    const { FetchUpcoming, HandleFetchBanner } = useContext(FetchContext)

    const addParams = (id: number) => {
        navigate(`/anime/${id}`);
    }
    useEffect(() => {
        HandleFetchBanner(false);
        getAnimeBanner()
    }, [FetchUpcoming])

    const getAnimeBanner = async () => {
        if (FetchUpcoming) {
            try {
                const resp = await animeAPI.get(`recommendations/anime`);
                setAnimeBanner(resp.data);
                HandleFetchBanner(true);
            } catch (error) {
                console.log({ error });
            }
        }
    };
    return (
        <>
            {
                !AnimeBanner ? <Loading /> : (
                    <Container>
                        <Button
                            onClick={
                                () => addParams(AnimeBanner?.data[0].entry[0].mal_id)
                            }
                        >
                            <Image src={AnimeBanner?.data[0].entry[0].images.webp.large_image_url} alt={AnimeBanner?.data[0].entry[0].title} />
                        </Button>
                        <ContainerTitleInfo>
                            <Title>Anime of The day</Title>
                            <TitleAnime>{AnimeBanner?.data[0].entry[0].title}</TitleAnime>
                        </ContainerTitleInfo>
                    </Container>
                )
            }
        </>
    )
}

export default Banner