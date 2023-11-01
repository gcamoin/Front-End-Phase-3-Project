import React from "react"
import GenreCard from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/GenreCard.js"

function GenreContainer({genres, handleDeleteMovie}){
    const genreList = genres.map((genre) => (
        <GenreCard 
            key={genre.id}
            genre={genre}
           handleDeleteMovie={handleDeleteMovie}
            
           
            
          />
        
    
    ));
    

    return (
        <div className="genrecards">
            {genreList}
            
            
        </div>
    )


}


export default GenreContainer