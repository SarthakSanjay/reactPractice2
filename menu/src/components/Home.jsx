import React, { useState } from 'react'
import styled from 'styled-components'
import MenuBar from './MenuBar'
import Menu from './Menu'
import menu from './data'

const allCategory = ["All",...new Set( menu.map((obj) => obj.category))] 


const Home = () => {
  const [menuItems , setMenuItems] = useState(menu)
  const [menuCategory , setMenuCategory] = useState(allCategory)

  const filterItems = (menuCategory) => {
    if( menuCategory === "All") {
      setMenuItems(menuItems)
      return
    }
    const newItems = menu.filter((item)=> item.category === menuCategory)
    setMenuCategory(newItems)
  }
  return (
    <Container>
    <h1>Menu</h1>
    <MenuBar filterItems={filterItems} menuCategory={menuCategory} />
    <Menu menu={menuItems} />



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