import React, { useState } from 'react'
import reviews from './data'
import styled from 'styled-components'
const Reviews = () => {
   
    const [num , setNum] = useState(0)
    const handleClick = (increment) => {
        const newNum = (num + increment + reviews.length) % reviews.length;
        setNum(newNum)
      }
    
      const handlePrevClick = () => {
        handleClick(-1);
      }
    
      const handleNextClick = () => {
        handleClick(1);
      }
    
      const handleRandomClick = () => {
        const randomNum = Math.floor(Math.random() * reviews.length);
        setNum(randomNum);
      }
  return (
    <Container>
       <div className='imageBackground'> <img src={reviews[num].image} /></div>
        <h4>{reviews[num].name}</h4>
        <h4>{reviews[num].job}</h4>
        <p>{reviews[num].text}</p>
        <div>
        <button onClick={handlePrevClick}>&lt; </button>
        <button onClick={handleNextClick}>&gt;</button>
        </div>
        <button className='randomBtn' onClick={handleRandomClick}>Surprise Me</button>
    </Container>
  )
}
const Container = styled.div`
min-height: 400px;
height: 400px;
width: 500px;
min-width: 500px;
background-color: white;
text-align: center;
border-radius: 10px;
padding: 10px;
.imageBackground{
    width:50px;
    height: 50px;
    border-radius: 50%;
    margin: 0px auto;
    background-color: skyblue;
    margin: 10px auto;
    left: 10px;
    img{
        margin: 10px auto;
        border-radius: 50%;
        width:50px;
        height: 50px;
        position: relative;
        right: 5px;
        bottom: 5px;
    }
}
h4{
    margin: 6px;
    color: skyblue;
}
p{
    /* border: 2px solid; */
    height: 8rem;
}
button{
    background:none;
    color: skyblue;
}
.randomBtn{
    background-color: royalblue;
}
`
export default Reviews