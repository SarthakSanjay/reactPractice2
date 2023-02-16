import React from 'react'
import styled from 'styled-components'
import Questions from './Questions'
import questions from './data'
const Accordian = () => {
  return (
    <Container>
        <h2>Questions and Answers about Login</h2>
        <div className='rightSideDiv'>
        {questions.map((obj)=>{
          return <Questions key={obj.id} title={obj.title} info={obj.info} />
        })}
        </div>
    </Container>
  )
}
const Container = styled.div`
background-color: white;
height: 400px;
width: 700px;
display: flex;
.rightSideDiv{
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
  padding: 20px;

}
h2{
  max-width: 200px;
  margin: 10px;
}
`
export default Accordian