import React, {useEffect, useState} from "react"
import GenreContainer from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/GenreContainer.js"
import Header from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/Header.js"
import AddMovieForm from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/AddMovieForm.js"
import AddGenreForm from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/AddGenreForm.js"


function App() {
  
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then((r) => r.json())
    .then(setGenres);


  }, []);

 
  function handleAddGenre(newGenre) {
    setGenres([...genres, newGenre])
  }

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie])
  }

  function handleDeleteMovie(movie){
  console.log(movie)  
     genres.map((genre) => genre.id )
  // map through genre arrays
  // find the genre with id that matches movie with genre id
  // filter through movies with specific genre id
  // 
  }


  return (
    <div className="App">
      <Header />
      <AddMovieForm handleAddMovie={handleAddMovie}/>
      <AddGenreForm handleAddGenre={handleAddGenre}/>
      
      <GenreContainer  genres={genres} handleDeleteMovie={handleDeleteMovie} />
   
      
      
    </div>
  );
}

export default App;
