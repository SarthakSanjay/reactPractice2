import React from 'react'
const Hero = ({data}) => {
    
  return (
    <div>
        {
            data.map((object) =>{
                return (
                    <div key={object.id}>
                        <h1>{object.title}</h1>
                        <h3>{object.dates}</h3>
                        <p>{object.company}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Hero