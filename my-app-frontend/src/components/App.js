import React, {useEffect, useState} from "react"
import MovieContainer from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/MovieContainer.js"
import Header from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/Header.js"


function App() {
  
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((r) => r.json())
    .then(setMovies)
     }, []);

  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then((r) => r.json())
    .then(setGenres)
  }, [])
  
  function handleDeleteMovie(movieToDelete) {
    const updatedMovies = movies.filter((movie) => movie.id !== movieToDelete.id)
    setMovies(updatedMovies)
  }

  return (
    <div className="App">
      <Header />
      <MovieContainer movies={movies} genres={genres} handleDeleteMovie={handleDeleteMovie}/>
      
      
    </div>
  );
}

export default App;
