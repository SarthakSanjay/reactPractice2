import React from 'react'

const BookListMap = () => {
  return (
    <div>
        {booklist.map((book)=>{
            const {name , author , image} = book
            return <Book name={name} image={image} author={author} />
        })}

    </div>
  )
}

const booklist = [
    {
        name:"harry potter",
        author:"jk rowling",
        image: "https://m.media-amazon.com/images/I/5165He67NEL.jpg"
    },
    {
        name:"Marvel Comics",
        author:"stan lee",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8vAcAYEGsZvyWLdkkW9Gemhxamm1Ip1RNxM5NP5NCZZFh4GRapA80u4KajwkEYR7dzpMcl0Ck24e1_xUiPULD1jrZdhDkDujMGpGfKoE"
    },
    {
        name:"DC comics",
        author:"warner bros",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLtBapSgavJgGxTgMgC-Q-9DRivYiyOw9EXeFeX7iXiVvYytGz"
    },
]

const Book = ({name , author , image }) => { 
    return(
        <div>
        <img src={image} alt="" style={{width:"200px" , height:"300px"}} />
            <h1>{name}</h1>
            <h3>{author}</h3>
        </div>
    )
}


export default BookListMap