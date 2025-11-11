import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const API_URL = "http://localhost:3000/api/movies";

export default function AdminMovieCreate() {

    const [movies, setMovies] = useState([]);
    // predisponiamo una costatnte per prendere l'errore per un fututo Bonus
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res.data.movies);
                setMovies(res.data.movies);


            })
            .catch(err => {
                // TODO: it would be great to show a user-friendly message in the UI (maybe use a useState hook to store the error and show it)
                /* console.error(err); */
                console.log(err.message);
                setError(err.message);
            })
    }, [])


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
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="director" className="form-label">Director</label>
                            <input type="text" className="form-control" id="director" name="director" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="coverImage" className="form-label">cover image url</label>
                            <input type="text" className="form-control" id="coverImage" name="coverImage" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-label">Quick summary</label>
                            <textarea className="form-control" name="abstract" id="abstract" rows="4" ></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark">Add Movie</button>
                    </form>
                </div>
            </div>




        </>
    )
}