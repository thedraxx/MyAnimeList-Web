import React, { useState } from 'react'
import { Button, ContainerSearch, Inputs, ContainerAnimeSearch } from './Style';
import { useForm } from '../../components/hooks/useForm'
import AnimeSearch from '../../components/AnimeSearch/AnimeSearch'

const Search = () => {
  const [PressEnter, setPressEnter] = useState(false)
  const [animeBusqueda, setAnimeBusqueda] = useState<string>('')

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
       <label>
        <Inputs
          type="text"
          placeholder="Search"
          value={name}
          onChange={value => onChange(value.target.value, 'name')}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              PresOnKeyDown()
            }
          }}
        />
      </label>

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