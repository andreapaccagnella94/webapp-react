export default function ReviewsCard({ rev }) {


    return (
        <>
            <div className="card p-3 mb-3 position-relative" >
                <h4>{rev.name}</h4>
                <p className="mb-1">{rev.text}</p>
                <div>Vote : {rev.vote}</div>
                <div className="vote text-warning position-absolute top-0 end-0 p-2">
                    {/* {'<i className="bi bi-star-fill'.repeat(rev.vote)}{'<i className="bi bi-star "></i>'.repeat(5 - rev.vote)} */}
                    {'★'.repeat(rev.vote)}{'☆'.repeat(5 - rev.vote)}
                </div>
            </div>
        </>
    )
}