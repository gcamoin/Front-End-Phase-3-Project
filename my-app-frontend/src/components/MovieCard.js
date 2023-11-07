import {React, useState} from "react"
import AddMovieForm from  "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/AddMovieForm.js"

function MovieCard({movie, handleDeleteMovie, handleUpdateMovie}) {
const {id, title, year, likes, dislikes} = movie
const [editTitle, setEditTitle] = useState(title)
const [editYear, setEditYear] = useState(year)
const [editMovie, setEditMovie] = useState(false)

function deleteMovie() {
    fetch(`http://localhost:9292/movies/${id}`, {
        method: "DELETE",
    })
        .then((r) => r.json())
        .then((deletedMovie) => handleDeleteMovie(deletedMovie))
}

function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/movies/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: editTitle,
            year: editYear

        })
    })
    .then((r) => r.json())
    .then((updatedMovie) => handleUpdateMovie(updatedMovie));
    setEditMovie(false)
}

function changeTitle(e) {
    setEditTitle(e.target.value)
}

function changeYear(e) {
    setEditYear(e.target.value)
}

return (
    <div className= 'movie-details'>
       { editMovie ? <form onSubmit={handleSubmit}><input
                    type="text"
                    placeholder="enter title of movie"
                    value={editTitle}
                    onChange={changeTitle}
                />
                <input 
                    type="text"
                    placeholder="year movies was released"
                    value={editYear}
                    onChange={changeYear}
                /><button>Submit</button></form> :
       <div> <h4>{title}</h4>
         <span>Released in {year}</span>
        </div>
       }
        <br></br>
        <br></br>
        <button className='like-btn'>👍 {likes}</button>
        <button className='dislike-btn'>👎 {dislikes}</button>
        <button className='deleteMovie' onClick={deleteMovie}>Remove Movie</button>
        <button onClick={() => setEditMovie(!editMovie)}>Edit Movie</button>
        
  
    </div>
    


)


}


export default MovieCard;