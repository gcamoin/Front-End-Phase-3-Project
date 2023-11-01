import React from "react"


function MovieCard({movie, handleDeleteMovie}) {
const {id, title, year, likes, dislikes} = movie

function deleteMovie() {
    fetch(`http://localhost:9292/movies/${id}`, {
        method: "DELETE",
    })
        .then((r) => r.json())
        .then((deletedMovie) => handleDeleteMovie(deletedMovie))
}

console.log(movie.title)
return (
    <div className= 'movie-details'>
        <h4>{title}</h4>
        <span>Released in {year}</span>
        <br></br>
        <br></br>
        <button className='like-btn'>👍 {likes}</button>
        <button className='dislike-btn'>👎 {dislikes}</button>
        <button className='deleteMovie' onClick={deleteMovie}>Remove Movie</button>
        


    </div>
    


)


}


export default MovieCard;