import { useState, useEffect } from 'react'
import { Button, ContainerBanner, ContainerButtons, ContainerImageInfo, ContainerText, CustomImageGalery, TextInfo, TextTitle } from './Style';
import { AnimeTopsInterface } from '../../interfaces/GetAnimeTopsInterface\'';
import animeAPI from '../../api/AnimeAPI';
import './icons.css';
import Loading from '../Loading/Loading';

const Carrousel = (): JSX.Element => {
    const [AnimeBanner, setAnimeBanner] = useState<AnimeTopsInterface>();
    const [increment, setIncrement] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [disabledMinus, setDisabledMinus] = useState<boolean>(false);

    const colors = [
        '#ff2424',
        '#9400fd',
        '#15c25d',
        '#fd8700',
        '#27d7ff',
        '#0094fd',
        '#ff34da',
    ]

    const incrementor = () => {
        if (increment > 6) {
            setDisabled(true)
        }

        if (increment < 6) {
            setDisabled(false)
            setIncrement(increment + 1)
        }

    }

    const decrementor = () => {
        if (increment < 0) {
            setDisabledMinus(true)
        }

        if (increment > 0) {
            setDisabledMinus(false)
            setIncrement(increment - 1)
        }
    }

    useEffect(() => {
        getAnimeTops()
    }, [])

    const getAnimeTops = async () => {
        try {
            const resp = await animeAPI.get('top/anime');
            setAnimeBanner(resp.data);
        } catch (error) {
            console.log({ error });
        }
    };
    return (
        !AnimeBanner ? <Loading /> : (
            <ContainerBanner color={colors[increment]}>
                <ContainerButtons>
                    <Button
                        disabled={disabledMinus}
                        onClick={() => decrementor()}>
                        <ion-icon name="caret-back-outline"></ion-icon>
                    </Button>
                    <Button
                        disabled={disabled}
                        onClick={() => incrementor()}>
                        <ion-icon name="caret-forward-outline"></ion-icon>
                    </Button>
                </ContainerButtons>
                <ContainerImageInfo>
                    <CustomImageGalery src={AnimeBanner?.data[increment].images.webp.large_image_url} alt="Anime Banner" />
                    <ContainerText>
                        <TextTitle>{AnimeBanner?.data[increment].title}</TextTitle>
                        <TextInfo>{AnimeBanner?.data[increment].synopsis.substring(0, 350).concat('...')}</TextInfo>
                    </ContainerText>
                </ContainerImageInfo>
            </ContainerBanner>
        )
    )
}

export default Carrousel

