import React from 'react'
import Slider from "react-slick";
import Carrousel from '../../components/Carrousel/Carrousel';
import { ContainerHome } from './Style';

const Home = () => {

  return (
    <ContainerHome>
        <Carrousel />
    </ContainerHome>
  )
}

export default Home