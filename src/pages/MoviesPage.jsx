import { Link } from "react-router-dom";

export default function MoviesPage() {


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
            <section>
                <div className="container mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/1">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 1</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 1</div>
                                    <Link className="btn btn-dark" to="/movies/1">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/2">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 2</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 2</div>
                                    <Link className="btn btn-dark" to="/movies/2">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/3">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 3</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 3</div>
                                    <Link className="btn btn-dark" to="/movies/3">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/1">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 1</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 1</div>
                                    <Link className="btn btn-dark" to="/movies/1">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/2">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 2</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 2</div>
                                    <Link className="btn btn-dark" to="/movies/2">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/3">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 3</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 3</div>
                                    <Link className="btn btn-dark" to="/movies/3">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/1">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 1</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 1</div>
                                    <Link className="btn btn-dark" to="/movies/1">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/2">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 2</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 2</div>
                                    <Link className="btn btn-dark" to="/movies/2">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/3">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="Movie Title" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Movie Title 3</h5>
                                    <div className="my-2"><i className="bi bi-person-badge"></i>Author Name 3</div>
                                    <Link className="btn btn-dark" to="/movies/3">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center ">
                        <button className="btn btn-dark btn-lg mt-5">Load More Movies</button>
                    </div>
                </div>
            </section>
        </>
    )
}