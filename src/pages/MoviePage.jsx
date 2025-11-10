import { useParams } from "react-router-dom";

export default function MoviePage() {

    const { id } = useParams();

    return (
        <>
            {/* Movie Cover */}
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5 d-flex gap-4">
                    <div className="cover col-12 col-sm-5 col-md-4">
                        <img src="https://placehold.co/600x400" className="img-fluid" alt="Movie Title" />
                    </div>
                    <div className="details">
                        <h1 class="display-5 fw-bold">Name of movie</h1>
                        <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 1</div>
                        <p className="lead">
                            A small description about the movie goes here. This section can include details about the plot, cast, director, release date, and other relevant information that provides an overview of the movie.
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
            <section id="reviews">
                <div className="container">
                    <div className="card p-3 mb-3 position-relative">
                        <h4>Mario</h4>
                        <p className="mb-1">A mind-bending masterpiece.</p>
                        <div className="vote text-warning position-absolute top-0 end-0 p-2">
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star "></i>
                        </div>
                    </div>
                    <div className="card p-3 mb-3 position-relative">
                        <h4>Sofia</h4>
                        <p className="mb-1">A mind-bending masterpiece.</p>
                        <div className="vote text-warning position-absolute top-0 end-0 p-2">
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star "></i>
                        </div>
                    </div>
                    <div className="card p-3 mb-3 position-relative">
                        <h4>Giacomo</h4>
                        <p className="mb-1">A mind-bending masterpiece.</p>
                        <div className="vote text-warning position-absolute top-0 end-0 p-2">
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star-fill "></i>
                            <i className="bi bi-star "></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}