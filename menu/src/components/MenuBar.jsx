import React from 'react'
import styled from 'styled-components'
import menu from './data'

const MenuBar = () => {
  return (
    <Container>
     <h3>All</h3>
     <h3>Breakfast</h3>
     <h3>Lunch</h3>
     <h3>Shakes</h3>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
/* border: 2px solid; */
width: 400px;
min-width: 400px;
height: 60px;
margin: 10px auto;
h3{
  background-color: gold;
  color: white;
  padding: 3px;
  margin: 3px;
  min-width: 140px;
  text-align: center;

}
`

export default MenuBar