import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlusCircle} from "react-icons/ai"
const Questions = (props) => {
  return (
    <Container>
    {props.title}

    <button>< AiOutlinePlusCircle /></button>
    {/* AiOutlineMinusCircle */}
    </Container>
  )
}
const Container = styled.div`
min-width: 400px;
height: 40px;
border: 1px solid;
display: flex;
justify-content: space-between;
align-items: center;
border-radius:10px;
margin: 10px auto;
padding: 0px 10px;

button{
    background: none;
    color: red;
    font-size: 20px;
}

`

export default Questions