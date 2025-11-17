import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";


export default function MoviePage() {

    const { id } = useParams();
    const API_URL = `http://localhost:3000/api/movies/${id}`
    // useState per caricare il film con la chiamata axios.get
    const [movie, setMovie] = useState(null)
    // predisponiamo una costatnte per prendere l'errore per un fututo Bonus
    const [error, setError] = useState(null);
    // variabili per informazioni iniziali form + useState per passare i dati che inserisco
    const initialForm = {
        name: "",
        vote: 0,
        text: ""
    }
    const [form, setForm] = useState(initialForm)
    // useState per il numero delle recensioni così da ricaricare la pagina
    const [reviewNumber, setReviewNumber] = useState(0)

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
    }, [reviewNumber])

    function handleSubmit(e) {
        e.preventDefault();

        console.log(form);
        axios.post(`${API_URL}/reviews`, form, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                setForm(initialForm)
                setReviewNumber(movie.reviews.length)
            })
            .catch(err => {
                console.error(err)
            })

    }

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
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input name="name" type="text" className="form-control" id="name" placeholder="type your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Review</label>
                            <textarea name="text" className="form-control" id="text" rows="3" placeholder="Write your review here..." value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="vote" className="form-label">Vote rating</label>
                            <select name="vote" className="form-select" id="vote" value={form.vote} onChange={(e) => setForm({ ...form, vote: e.target.value })}>
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