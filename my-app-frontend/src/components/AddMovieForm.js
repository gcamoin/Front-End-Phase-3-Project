import {React, useState} from "react"


function AddMovieForm({handleAddMovie, genres, genre_id}) {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [genreID, setGenreID] = useState("")
    
   
    function onChangeTitle(e) {
        setTitle(e.target.value)
    }

    function onChangeYear(e) {
        setYear(e.target.value)
    }

    // function onChangeGenre() {
    //     const idGenre = genres.map((genre) => genre.id)
    //     setGenreID(idGenre)
    // }
    
    
   
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                year: year,
                likes: likes,
                dislikes: dislikes,
                genre_id: genreID
                
                
               


            }),
        })
        .then((r) => r.json())
        .then((movieToAdd) => handleAddMovie(movieToAdd))
        
    }
        return (
            <div className="add-movie-form">
                <h2>Add Movies</h2>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter title of movie"
                    value={title}
                    onChange={onChangeTitle}
                />
                <input 
                    type="text"
                    placeholder="year movies was released"
                    value={year}
                    onChange={onChangeYear}
                />
                
                
                <select id="genres" value={genreID} onChange={(e) => setGenreID(e.target.value)}>
                    <option key={0}>Select Genre</option>
                    {genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                    
                </select>
                <button type="submit">Add</button>
                
                </form>
                <p>{genreID}</p>
            </div>
        )

}


export default AddMovieForm;