import React from 'react'
import styled from 'styled-components'
import MenuBar from './MenuBar'
import Menu from './Menu'
const Home = () => {
  return (
    <Container>
    <h1>Menu</h1>
    <MenuBar />
    <Menu />



    </Container>
  )
}
const Container = styled.div`
min-height: 100vh;
max-width: 100vw;
height: 100vh;
width: 100vw;
background-color:  rgb(200, 229, 240) ;
h1{
  text-align: center;
    
}

`
export default Home