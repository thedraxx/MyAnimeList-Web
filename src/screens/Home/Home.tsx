import React from 'react'
import Slider from "react-slick";
import Carrousel from '../../components/Carrousel/Carrousel';
import { ContainerHome } from './Style';
import Recomendations from '../../components/Recomendations/Recomendations';

const Home = () => {

  return (
    <ContainerHome>
        <Carrousel />
        <Recomendations />
    </ContainerHome>
  )
}

export default Home