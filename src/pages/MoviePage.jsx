import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";


export default function MoviePage() {

    const { id } = useParams();
    const API_URL = `http://localhost:3000/api/movies/${id}`

    const [movie, setMovie] = useState(null)
    // predisponiamo una costatnte per prendere l'errore per un fututo Bonus
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res.data);
                setMovie(res.data)
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
            {/* Movie Cover */}
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5 d-flex gap-4">
                    <div className="cover col-12 col-sm-5 col-md-4">
                        <img src={`http://localhost:3000/${movie?.image}`} className="img-fluid" alt={movie?.title} />
                    </div>
                    <div className="details">
                        <h1 className="display-5 fw-bold">{movie?.title}</h1>
                        <div className="my-2"><i className="bi bi-camera-reels"></i>{movie?.director}</div>
                        <div className="my-2"><i className="bi bi-film"></i>{movie?.genre}</div>
                        <p className="lead">
                            {movie?.abstract}
                        </p>

                    </div>

                </div>
            </div>

            {/* Review Form */}
            <div className="mb-4">
                <div className="container">
                    <h3>Leave a Review</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input name="name" type="text" className="form-control" id="name" placeholder="anonymous" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea name="review" className="form-control" id="review" rows="3" placeholder="Write your review here..."></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Rating</label>
                            <select name="rating" className="form-select" id="rating">
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit Review</button>
                    </form>
                </div>
                <hr className="w-25 mx-auto pt-5 my-5" />
            </div>

            {/* Reviews Section */}
            <ReviewsList reviews={movie?.reviews || []} />
        </>
    )

};