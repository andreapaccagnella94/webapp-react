import ReviewsCard from "./ReviewsCard"

export default function ReviewsList({ reviews }) {


    return (
        <>
            <section id="reviews">
                <div className="container">
                    {reviews.map(review => (
                        <ReviewsCard key={review.id} rev={review} />
                    ))}


                </div>
            </section>
        </>
    )
}