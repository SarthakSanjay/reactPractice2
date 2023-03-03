import React from 'react'

const BookList = () => {
  return (
    <div>
        <Book name="Harry Potter" author="JK Rowling" date={1997} />

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
const Book = ({name , author , date}) => {
    return(
        <div>
        <img src='https://m.media-amazon.com/images/I/5165He67NEL.jpg' alt="" style={{width:"200px" , height:"300px"}} />
            <h1>{name}</h1>
            <h3>{author}</h3>
            <p>{date}</p>
        </div>
    )
}

export default BookList