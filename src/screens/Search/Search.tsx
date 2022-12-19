import React, { useState } from 'react'
import {ContainerSearch, Inputs, ContainerAnimeSearch, Border } from './Style';
import { useForm } from '../../components/hooks/useForm'
import AnimeSearch from '../../components/AnimeSearch/AnimeSearch'

const Search = () => {
  const [PressEnter, setPressEnter] = useState<boolean>(false)
  const [animeBusqueda, setAnimeBusqueda] = useState<string>('')
  const [isEnter, setIsEnter] = useState<boolean>(false)

  const { name,onChange } = useForm(
    {
      name: '',
    }
  )

  const PresOnKeyDown = () => {
    setPressEnter(false)

    setTimeout(() => {
      setAnimeBusqueda(name)
      setPressEnter(true)
    }, 200);
  }


  return (
    <ContainerSearch>
        <Inputs
          type="text"
          placeholder="Search..."
          value={name}
          onChange={value => onChange(value.target.value, 'name')}
          onFocus={() => setIsEnter(true)}
          onBlur={() => setIsEnter(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              PresOnKeyDown()
            }
          }}
        />
        <Border isEnter={isEnter}/>
      {
        PressEnter && (
          <ContainerAnimeSearch>
          <AnimeSearch name={animeBusqueda} PressEnter={PressEnter} />
          </ContainerAnimeSearch>
        )
      }
    </ContainerSearch >

  )
}

export default Search