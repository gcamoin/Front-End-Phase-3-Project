import React from "react"
import Movies from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/Movies.js"

function MovieContainer({movies, handleDeleteFood}){
    const movieCards = movies.map((movie) => (
        <Movies 
            key={movie.id}
            movie={movie}
            handleDeleteFood={handleDeleteFood}

        />
    
    ));

    return (
        <div className="moviecards">
            {movieCards}
            
        </div>
    )


}


export default MovieContainer