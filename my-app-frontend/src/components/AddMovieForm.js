import {React, useState} from "react"


function AddMovieForm({handleAddMovie}) {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
   
    function onChangeTitle(e) {
        setTitle(e.target.value)
    }

    function onChangeYear(e) {
        setYear(e.target.value)
    }

    function onChangeGenre(e) {
        setGenre(e.target.value)
    }
   

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
                genre: genre


            }),
        })
        .then((r) => r.json())
        .then((newMovie) => handleAddMovie(newMovie))
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
                

                <button type="submit">Add</button>
                
                </form>
            </div>
        )

}


export default AddMovieForm;