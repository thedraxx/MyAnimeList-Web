import React from 'react'
import { useLocation } from 'react-router-dom';
import { Datum } from '../../interfaces/GetAnimeTopsInterface';

interface CustomizedState {
  anime: Datum
}


const Anime = () => {
  const location = useLocation()
  const state  = location.state as CustomizedState


console.log(state.anime.title)


  return (
    <div>Anime</div>
  )
}

export default Anime