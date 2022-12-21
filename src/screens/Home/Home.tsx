import React from 'react'
import Carrousel from '../../components/Carrousel/Carrousel';
import { ContainerHome } from './Style';
import Upcoming from '../../components/Upcoming/Upcoming';
import TopAnime from '../../components/TopAnime/TopAnime';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  return (
    <ContainerHome>
        <Carrousel />
        <Upcoming />
        <Banner />    
        <TopAnime />
        <Footer />
    </ContainerHome>
  )
}

export default Home