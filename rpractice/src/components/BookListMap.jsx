import React from 'react'

const booklist = [
    {
        id: 1,
        name: "harry potter",
        author: "jk rowling",
        image: "https://m.media-amazon.com/images/I/5165He67NEL.jpg"
    },
    {
        id: 2,
        name: "Marvel Comics",
        author: "stan lee",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8vAcAYEGsZvyWLdkkW9Gemhxamm1Ip1RNxM5NP5NCZZFh4GRapA80u4KajwkEYR7dzpMcl0Ck24e1_xUiPULD1jrZdhDkDujMGpGfKoE"
    },
    {
        id: 3,
        name: "DC comics",
        author: "warner bros",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLtBapSgavJgGxTgMgC-Q-9DRivYiyOw9EXeFeX7iXiVvYytGz"
    },
]

// const friend = ['sharko', 'shubham','akshay']
// const allFriend = [...friend , 'babe rexha']
// console.log(allFriend)
const BookListMap = () => {
    return (
        <div>
            {/* {booklist.map((book) => {
            const {name , author , image , id} = book
            return <Book name={name} image={image} author={author} key={id} />
            // key is always provided in the main return always remember that
        })} */}

            
               { // if we want to send whole object as prop we can do it to
                /* booklist.map((book) => {
                    const { name, author, image, id } = book
                    return <Book book={book} key={id} />
                    // key is always provided in the main return always remember that
                }) */}
            
            {
                booklist.map((book)=>{
                    return <Book {...book} key={book.id} />
                })
            }
        </div>
    )
}



//const Book = (props) => { // since prop is an object and inside it we have another object  book above is the syntax to destructure it
   // console.log(props)
    //this will output
    //{book: {…}}
   
//     const Book = ({book: {image , name , author}}) => {
// return (
//     <div >
//         <img src={image} alt="" style={{ width: "200px", height: "300px" }} />
//         <h1>{name}</h1>
//         <h3>{author}</h3>
//     </div>
// )
// }
const Book = (props) => {
    const { name, author, image } = props
    return (
        <div >
            <img src={image} alt="" style={{ width: "200px", height: "300px" }} />
            <h1>{name}</h1>
            <h3>{author}</h3>
        </div>
    )
    }


export default BookListMap