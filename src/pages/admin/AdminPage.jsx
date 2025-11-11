import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const API_URL = "http://localhost:3000/api/movies";

export default function AdminPage() {

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
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="display-6">
                        Admin Dashboard
                    </h1>
                    <Link to="/admin/movies/create" className="btn btn-dark">Add New Movie</Link>
                </div>
            </div>



            {/* add movie table */}

            <div className="container">
                <div
                    className="table-responsive-sm">
                    <table
                        className="table table-striped table-hover table-borderless table-light align-middle">
                        <thead className="table-light">

                            <tr>
                                <th>Cover Image</th>
                                <th>Title</th>
                                <th>Director</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {movies.map(movie => (
                                <tr className="table-light" key={movie.id}>
                                    <td>{movie.image}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <Link className="btn btn-sm btn-dark" to={`/movies/${movie.id}`}>
                                                <i className="bi bi-eye"></i>
                                            </Link>
                                            <a className="btn btn-sm btn-secondary" href="#">
                                                <i className="bi bi-pencil"></i>
                                            </a>
                                            <a className="btn btn-sm btn-danger" href="#">
                                                <i className="bi bi-trash"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}


                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}