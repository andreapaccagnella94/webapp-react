import MovieCard from "./MovieCard"

export default function MoviesList({ movies }) {


    return (
        <>
            <section>
                <div className="container mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />

                        ))}

                    </div>
                    <div className="text-center ">
                        <button className="btn btn-dark btn-lg mt-5">Load More Movies</button>
                    </div>
                </div>
            </section>
        </>
    )
}