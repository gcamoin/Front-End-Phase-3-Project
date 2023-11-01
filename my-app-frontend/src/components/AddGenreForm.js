import {React, useState} from "react"

function AddGenreForm({handleAddGenre}) {

const [name, setName] = useState("")

    function onChangeName(e) {
    setName(e.target.value)
}

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/genres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                
            }),
        })
        .then((r) => r.json())
        .then((newGenre) => handleAddGenre(newGenre))
    }

    return (
        <div className="add-genre-form">
            <h2>Add Genres</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="add genre"
                    value={name}
                    onChange={onChangeName}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
   
    
}

export default AddGenreForm;