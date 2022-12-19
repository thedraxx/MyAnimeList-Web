import React from 'react'
import { Button, ContainerLogo, ContainerNavBar, Text } from './Style'
import { IonIcon } from '@ionic/react'
import { useParams, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <ContainerNavBar>
      <Button 
        onClick={() => {
          navigate('/')
        }}
      >
        <ContainerLogo>
        <Text>MyAnimeList</Text>
        </ContainerLogo>
      </Button>
      <Button
              onClick={() => {
                navigate('/search')
              }}
      >
      <IonIcon name="search" color='light'/>
      </Button>
    </ContainerNavBar>
  )
}

export default Navbar