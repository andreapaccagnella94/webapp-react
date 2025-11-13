import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {


    return (
        <>
            <div className="col">
                <div className="card">
                    <Link to={`/movies/${movie.id}`}>
                        <img src={`http://localhost:3000/${movie.image}`} className="card-img-top" alt={movie.title} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <div className="my-2"><i className="bi bi-camera-reels"></i>{movie.director}</div>
                        <div className="my-2"><i className="bi bi-film"></i>{movie.genre}</div>
                        <Link className="btn btn-dark" to={`/movies/${movie.id}`}>View details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}