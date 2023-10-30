import React from "react"


function Movies({movie, handleDeleteMovie}) {
    const {id, title, year, likes, dislikes} = movie

    function handleDeleteMovie() {
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then((data) => {
                handleDeleteMovie(movie)
            })
    }

    
    
    return (
        <div className="movie">
            <h2 className="movie-title">
                {title}
            </h2>
            {/* <span>{movie.genre.name}</span> */}
            <br></br>
            <span> Released in {year}</span>
            <br></br>
            <button className="like-btn"> 👍 {likes}</button>
            <button className="dislike-btn"> 👎 {dislikes} </button>
            <br></br>
            <button onClick={handleDeleteMovie}>Remove Movie</button>
            
          

        </div>
    )


}


export default Movies;