import React from 'react'

const BookList = () => {
  return (
    <div>
        <Book name="Harry Potter" author="JK Rowling" date={1997} />
        {// I want to add a new prop only to this particular component 
        //first close the component now provide the prop to it 
        }
        <Book name="Harry Potter" author="JK Rowling" date={1997} > 
          <button>Click me</button>
         </Book>

    </div>
  )
}

//first way of passing props

// const Book = (props) => {
//     return(
//         <div>
//         <img src='https://m.media-amazon.com/images/I/5165He67NEL.jpg' alt="" style={{width:"200px" , height:"300px"}} />
//             <h1>{props.name}</h1>
//             <h3>{props.author}</h3>
//             <p>{props.date}</p>
//         </div>
//     )
// }

// second way of passing props
// const Book = (props) => {
//   const {name , author , date} = props
//     return(
//         <div>
//         <img src='https://m.media-amazon.com/images/I/5165He67NEL.jpg' alt="" style={{width:"200px" , height:"300px"}} />
//             <h1>{name}</h1>
//             <h3>{author}</h3>
//             <p>{date}</p>
//         </div>
//     )
// }

// third way of passing props
const Book = ({name , author , date , children}) => { //childern props is predefined prop
    return(
        <div>
        <img src='https://m.media-amazon.com/images/I/5165He67NEL.jpg' alt="" style={{width:"200px" , height:"300px"}} />
            <h1>{name}</h1>
            <h3>{author}</h3>
            <p>{date}</p>
            {children}
        </div>
    )
}

// now what if i want to give some prop to one component only and not to the other one , this can be done using childern prop provided by the react itself

export default BookList