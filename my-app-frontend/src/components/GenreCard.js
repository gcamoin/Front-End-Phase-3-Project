import {React, useState} from "react"
import MovieCard from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/MovieCard.js"

function GenreCard({handleDeleteMovie, genre, handleUpdateMovie}) {
    const {genre_id, name, movies} = genre


  
const movieList = movies?.map((movie) => (
    <MovieCard 
        key={movie.id}
        movie={movie}
        handleDeleteMovie={handleDeleteMovie}
        handleUpdateMovie={handleUpdateMovie}
      
        
    
    />
));
   
    return (
        <div className="genres">
          
            <h1 className="genre-cards">
                {name}
            </h1>

            {movieList}
            
                
             
     
          
        </div>
    )


}


export default GenreCard;