import { useState, useEffect } from 'react'
import { Button, ContainerBanner, ContainerButtons, ContainerImageInfo, ContainerText, CustomImageGalery, TextInfo } from './Style';
import { AnimeTopsInterface } from '../../interfaces/GetAnimeTopsInterface\'';
import animeAPI from '../../api/AnimeAPI';

const Carrousel = ():JSX.Element => {
    const [AnimeBanner, setAnimeBanner] = useState<AnimeTopsInterface>();
    const [increment, setIncrement] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [disabledMinus, setDisabledMinus] = useState<boolean>(false)

    const colors = [
        '#fd0000',
        '#9400fd',
        '#15c25d',
        '#fdf000',
        '#15fd00',
        '#0094fd',
        '#fd00cf',
        '#00fd65',
    ]

    const incrementor = () => {
        if (increment > 6 ){
            setDisabled(true)
        }

        if (increment < 6 ){
            setDisabled(false)
            setIncrement(increment + 1)
        }

    }

    const decrementor = () => {
        if (increment < 0 ){
            setDisabledMinus(true)
        }

        if (increment > 0 ){
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
        
        <ContainerBanner color={colors[increment]}>
            <ContainerButtons>
                <Button 
                disabled={disabledMinus}
                onClick={() => decrementor()}><h1>-</h1></Button>
                <Button 
                disabled={disabled}
                onClick={() => incrementor()}><h1>+</h1></Button>
            </ContainerButtons>
            <ContainerImageInfo>
            <CustomImageGalery src={AnimeBanner?.data[increment].images.webp.large_image_url} alt="Anime Banner" />
            <ContainerText>
            <TextInfo>{AnimeBanner?.data[increment].title}</TextInfo>
            <TextInfo>hola hago memes</TextInfo>
            </ContainerText>

            </ContainerImageInfo>
       
       
        </ContainerBanner>
    )
}

export default Carrousel