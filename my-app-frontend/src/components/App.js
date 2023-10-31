import React, {useEffect, useState} from "react"
import GenreContainer from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/GenreContainer.js"
import Header from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/Header.js"
import AddMovieForm from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/AddMovieForm.js"


function App() {
  
  const [genres, setGenres] = useState([])



  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then((r) => r.json())
    .then(setGenres);

  }, [])

 const movieList = genres.map((genre) => genre.movies.map((movie) => movie.title) )
// console.log(movieList)

  return (
    <div className="App">
      <Header />
      <AddMovieForm />
      
      <GenreContainer  genres={genres} movieTitles={movieList}/>
   
      
      
    </div>
  );
}

export default App;
