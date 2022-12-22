import React from 'react'
import { Button, ContainerLogo, ContainerNavBar, Text } from './Style'
import { IonIcon } from '@ionic/react'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

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
      <FaSearch color="white"/>
      </Button>
    </ContainerNavBar>
  )
}

export default Navbar