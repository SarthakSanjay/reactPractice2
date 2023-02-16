import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlinePlus ,AiOutlineMinus} from "react-icons/ai"
const Questions = (props) => {
    const [info , setInfo] = useState(true)
    const [btn , setBtn] = useState(true)
    const handleClick = () => {
        setInfo(props.info)
        // setBtn(<AiOutlineMinus className='btn' />)
    }
  return (
    <Container>
    <div className='qna'>
    <h3> {props.title}</h3>
    {!info && <p>{props.info}</p> }
    </div>
   <span onClick={() => {setBtn(!btn); setInfo(!info)}} >{btn? <AiOutlinePlus   className='btn' /> : <AiOutlineMinus  className='btn' />}</span>

   {/* < AiOutlinePlus onClick={handleClick}  className="btn"/ > */}
    {/* AiOutlineMinusCircle */}
    </Container>
  )
}
const Container = styled.div`
min-width: 500px;
/* height: 40px; */
min-height: 40px;
border: 2px solid;
display: flex;
justify-content: space-between;
align-items: center;
border-radius:10px;
margin: 10px auto;
padding: 0px 10px;

.btn{
    background:  #a68bb0;
    color: purple;
    font-size: 20px;
    outline: none;
    border: none;
    width: 20px;
    border-radius: 50%;
}
.qna{
    display: flex;
    flex-direction: column;
    h3{
        font-size: 16px;
    }
    p{
        max-width: 450px;
    }
}
`

export default Questions