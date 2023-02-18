import React from 'react'
import styled from 'styled-components'

const MenuBar = () => {
  return (
    <Container>MenuBar</Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
border: 2px solid;
width: 400px;
min-width: 400px;
height: 60px;
`

export default MenuBar