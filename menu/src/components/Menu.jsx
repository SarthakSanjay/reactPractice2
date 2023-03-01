import React from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'
const Menu = ({menu}) => {
  return (
    <Container>
        <MenuItems menu={menu} key={menu.id} />
    </Container>
  )
}

const Container = styled.div`
  max-width: 74vw;
  /* border: 2px solid saddlebrown; */
  margin: 0 auto;

`

export default Menu