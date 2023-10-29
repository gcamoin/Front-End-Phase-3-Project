import React, {useEffect, useState} from "react"
import MovieContainer from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/MovieContainer.js"

function App() {
  
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((r) => r.json())
    .then((movies) => setMovies(movies))
    
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then((r) => r.json())
    .then(setGenres)
    console.log(genres)
  }, [])
  console.log(movies)

  return (
    <div className="App">

      <MovieContainer movies={movies} genres={genres}/>
      
    </div>
  );
}

export default App;
