import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



const URL = 'http://localhost:3000/api/movies'
const initialData = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null
}

export default function AdminMovieCreate() {

    const [formData, setFormData] = useState(initialData)

    function handleSubmit(e) {
        e.preventDefault()

        const data = new FormData()
        data.append("title", formData.title)
        data.append("director", formData.director)
        data.append("genre", formData.genre)
        data.append("release_year", formData.release_year)
        data.append("abstract", formData.abstract)
        data.append("image", formData.image)

        console.log(data);

        axios.post(URL, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.error("There was an error creating the movie", error)
            })
        setFormData(initialData)
    }


    return (
        <>
            <div className="banner bg-light-subtitle p-3 mb-4">
                <div className="container">
                    <h1 className="display-6">
                        Add New Movie
                    </h1>
                </div>
            </div>

            {/*add books form */}
            <div className="container">
                <h2 className="h4 mb-3">Add new Movie</h2>
                <div className="card p-3 mb-5">
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="director" className="form-label">Director</label>
                            <input type="text" className="form-control" id="director" name="director" value={formData.director} onChange={(e) => setFormData({ ...formData, director: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <input type="text" className="form-control" id="genre" name="genre" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="release_year" className="form-label">Realise Year</label>
                            <input type="text" className="form-control" id="release_year" name="release_year" value={formData.release_year} onChange={(e) => setFormData({ ...formData, release_year: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-label">Quick summary</label>
                            <textarea className="form-control" name="abstract" id="abstract" rows="4" value={formData.abstract} onChange={(e) => setFormData({ ...formData, abstract: e.target.value })} ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="coverImage" className="form-label">Upload cover image</label>
                            <input type="file" className="form-control" id="coverImage" name="coverImage" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
                        </div>

                        <button type="submit" className="btn btn-dark">Add Movie</button>
                    </form>
                </div>
            </div>




        </>
    )
}