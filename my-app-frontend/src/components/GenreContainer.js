import React from "react"
import Genres from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/Genres.js"

function GenreContainer({genres, movieTitles}){
    const genreList = genres.map((genre) => (
        <Genres 
            key={genre.id}
            genre={genre}
            movieTitles={movieTitles}
            
           
            
          />
        
    
    ));
    

    return (
        <div className="genrecards">
            {genreList}
            
            
        </div>
    )


}


export default GenreContainer