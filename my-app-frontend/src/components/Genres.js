import React from "react"



function Genres({handleDeleteMovie, genre, movieTitles}) {
    const {id, name, movies: [{title, year, likes, dislikes}] } = genre
   
   
    // function deleteMovie() {
    //     fetch(`http://localhost:9292/movies/${id}`, {
    //         method: "DELETE",
    //     })
    //         .then((r) => r.json())
    //         .then((data) => deleteMovie(handleDeleteMovie))
    // }
 
    
    return (
        <div className="genres">
          
            <h1 className="genre-cards">
                {name}
                
                
                
            </h1>

                <h4>{title}</h4>
                <span> Released in {year} </span>
                <br></br>
                <br></br>
                <button>👍{likes}</button>
                <button>👎 {dislikes}</button>
                {movieTitles.map((movie) => <li>{title}, {year}</li>)}
          
               
            
            
          

        </div>
    )


}


export default Genres;