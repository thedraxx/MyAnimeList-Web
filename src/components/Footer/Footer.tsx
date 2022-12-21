import React from 'react'
import { Container, H1 } from './Style'
import logo from '../../assets/yuzu.png';

const Footer = () => {
  return (
    <Container>
        <img src={logo} />
        <H1>Nothing more to see here...</H1>
    </Container>
  )
}

export default Footer