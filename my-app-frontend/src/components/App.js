import React, {useEffect, useState} from "react"
import GenreContainer from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/GenreContainer.js"
import Header from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/Header.js"
import AddMovieForm from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/AddMovieForm.js"
import AddGenreForm from "/home/gcamoin/Front-End-Phase-3-Project/my-app-frontend/src/components/AddGenreForm.js"


function App() {
  
  const [genres, setGenres] = useState([])


  
  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then((r) => r.json())
    .then(setGenres);


  }, []);

 
  function handleAddGenre(newGenre) {
    setGenres([...genres, newGenre])
  }

  function handleAddMovie(newMovie) {
    const genreMovieArray = genres.map(genre => {
      if(genre.id === newMovie.genre_id) {
        const updatedMovies = [...genre.movies, newMovie]
        const updatedGenre = {...genre, updatedMovies}
        console.log(updatedGenre)
        
        return updatedGenre
      } else {
        return genre
      }
    })
    setGenres(genreMovieArray)
    console.log(genreMovieArray)
    
  }
    

  function handleDeleteMovie(movieToDelete){
  
  const genreArray = genres.map(genre => {
    if(genre.id === movieToDelete.genre_id) {
      const updatedMovies = genre.movies.filter((movie) => movieToDelete.id !== movie.id)
    const updatedGenre = {...genre, movies:updatedMovies}
    return updatedGenre
      
    } else {
      return genre
    }
  })
  
  setGenres(genreArray)
  
  
}

  return (
    <div className="App">
      <Header />
      <AddMovieForm handleAddMovie={handleAddMovie} genres={genres}/>
      <AddGenreForm handleAddGenre={handleAddGenre}/>
      
      <GenreContainer  genres={genres} handleDeleteMovie={handleDeleteMovie} />
   
      
      
    </div>
  );
}

export default App;
