import React from 'react'
import styled from 'styled-components'
import menu from './data'

const MenuItems = () => {
  return (
    <Container>
        {
            menu.map((obj)=>{
                return (
                    <Container1>
                      <img src={obj.img} />
                      <div className='content' >
                      <div className='title'>
                        <h3>{obj.title.toUpperCase()}</h3>
                        <h3>${obj.price}</h3>

                      </div>
                      <p>{obj.desc}</p>

                      </div>
                    </Container1>
                )
            })
        }
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-wrap: wrap;

`
const Container1 = styled.div`
width:450px ;
max-width: 450px;
height: 150px;
max-height: 200px;
/* border: 1px solid; */
display: flex;
margin: 10px auto;
img{
  width: 200px;
  height: 150px;
  min-width: 200px;
  border: 2px solid gold;
  border-radius: 10px;
}
.content{
  display: flex;
  flex-direction: column;
  padding: 10px;
  .title{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    border-bottom: 2px solid;
  }
  p{
    font-size: 12px;
  }
}
`

export default MenuItems