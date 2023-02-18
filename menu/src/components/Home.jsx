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
height: 100%;
max-width: 100vw;
width: 100vw;
background-color:  rgb(200, 229, 240) ;
h1{
  text-align: center;
  width: 200px;
  border-bottom: 2px solid gold;
  margin: 0 auto;
    
}

`
export default Home