import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";


const API_URL = "http://localhost:3000/api/movies";

export default function MoviesPage() {

    const [movies, setMovies] = useState([]);
    // predisponiamo una costatnte per prendere l'errore per un fututo Bonus
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res);
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
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold">Movies Collections</h1>
                    <p className="col-md-8 fs-4">
                        This is a simple hero unit, to showcase the movies available in our app and their reviews.
                    </p>
                </div>
            </div>
            <MoviesList movies={movies} />
        </>
    )
}