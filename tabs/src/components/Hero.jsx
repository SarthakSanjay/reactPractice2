import React from 'react'
import data from './data'
const Hero = () => {
    
  return (
    <div>
        {
            data.map((object) =>{
                return (
                    <div>
                        <h1>{object.title}</h1>
                        <h3>{object.dates}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Hero