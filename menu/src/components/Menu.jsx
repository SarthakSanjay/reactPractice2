import React from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'
const Menu = (props) => {
  return (
    <Container>
        <MenuItems menu={props.menu} key={props.id} />
    </Container>
  )
}

const Container = styled.div`
  max-width: 74vw;
  /* border: 2px solid saddlebrown; */
  margin: 0 auto;

`

export default Menu