import { useEffect, useState } from 'react'
import animeAPI from '../../api/AnimeAPI'
import Loading from '../Loading/Loading'
import { Button, Container, ContainerTitleInfo, Image, Title, TitleAnime } from './Style'
import { useNavigate } from 'react-router-dom';
import { AnimeRecomendations } from '../../interfaces/AnimeRecomendations'

const Banner = () => {
    const [AnimeBanner, setAnimeBanner] = useState<AnimeRecomendations>()
    const navigate = useNavigate();

    const addParams = (id: number) => {
      navigate(`/anime/${id}`);
    }
    useEffect(() => {
        setTimeout(() => {
            getAnimeBanner()
        }, 1500);
    }, [])

    const getAnimeBanner = async () => {
        try {
            const resp = await animeAPI.get(`recommendations/anime`);
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