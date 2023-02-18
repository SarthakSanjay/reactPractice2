import React from 'react'
import menu from './data'

const MenuItems = () => {
  return (
    <div>
        {
            menu.map((obj)=>{
                return (
                    <div>{obj.title}</div>
                )
            })
        }
    </div>
  )
}

export default MenuItems