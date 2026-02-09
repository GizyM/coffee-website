import {
    FaQuoteRight,
    FaStar,
    FaStarHalfAlt
} from "react-icons/fa";

const Review = () => {
    const reviews = [
        {
            id: 1, 
            text: `I shop here every morning before work and it's honestly the highlight of my day. The coffee is smooth,
            rich, and always hits the spot. The baristas actually remember my order. The atmosphere is calm but not sleepy--
            perfect for easy mornings.`,
            img: "/images/pic-1.png",
            name: "John Deo",
        },
        {
            id: 2,
            text: `The ambiance here is fantastic. It's cozy and inviting, making it a great place to catch up with friends 
            or get some work done. The staff are friendly and the coffee is consistently good. Their drinks are creative and delicious
            without being overly sweet.`,
            img: "/images/pic-2.png",
            name: "Jane Doe"
        },
        {
            id: 3,
            text: `The staff here are incredibly knowledgeable and passionate about coffee. They take the time to explain different 
            brewing methods and recommend beans based on your taste preferences. It's clear they care about quality and 
            customer experience.`,
            img: "/images/pic-3.png",
            name: "Dan Smith",
        },
    ];

    return (
        <section className="review" id="review">
            <h1 className="heading">
                Customer <span>Reviews</span>
            </h1>

            <div className="review-list">
                {reviews.map((review) => (
                    <div className="review-item" key={review.id}>
                        <FaQuoteRight className="quote-icon" />

                        <p>{review.text}</p>

                        <img 
                            src={review.img} 
                            alt={`${review.name} review`}
                            className="customer-pic" 
                        />

                        <h3 className="customer-name">{review.name}</h3>

                        <div className="rating-point">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Review;