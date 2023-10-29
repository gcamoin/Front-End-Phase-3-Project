import React from "react"


function Movies({movie}) {
    const {id, title, year, likes, dislikes, genre_id,} = movie


    
    return (
        <div className="movie">
            <h2 className="movie-title">
                {title}
            </h2>
            <button className="like-btn"> 👍 {likes}</button>
            <button className="dislike-btn"> 👎 {dislikes} </button>
            <br></br>
            <span> Released in {year}</span>

        </div>
    )


}


export default Movies;