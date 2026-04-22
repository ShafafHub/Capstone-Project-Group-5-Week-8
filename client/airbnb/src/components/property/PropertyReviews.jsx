import "./../../styles/property.css";

const ratingStats = [
  { label: "Cleanliness", value: "4.9" },
  { label: "Accuracy", value: "4.8" },
  { label: "Check-in", value: "5.0" },
  { label: "Communication", value: "4.9" },
  { label: "Location", value: "4.8" },
  { label: "Value", value: "4.6" },
];

const reviews = [
  {
    id: 1,
    name: "Alice",
    location: "Zurich, Switzerland",
    date: "2 years on Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    text: "Sun-soaked space. Good wood recommended and definitely well designed. The stay felt calm, private, and special from the moment we arrived.",
  },
  {
    id: 2,
    name: "Colin",
    location: "Edinburgh, Scotland",
    date: "1 year on Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    text: "The kitchen was gorgeous and very well set up. I had a great time enjoying the views and fireplace. The host gave clear instructions and where to park and how to get inside.",
  },
  {
    id: 3,
    name: "Michele",
    location: "Los Angeles, US",
    date: "4 years on Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    text: "The view was absolutely perfect for the purpose intended. It was quiet and peaceful with spectacular views.",
  },
  {
    id: 4,
    name: "Nicole",
    location: "New York, US",
    date: "3 years on Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    text: "The treehouse was amazing. The location was serene and beautiful. Our family of five fit comfortably, and the children especially loved the loft space.",
  },
  {
    id: 5,
    name: "Brendan",
    location: "Boston, US",
    date: "2 years on Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    text: "Great experience and beautiful location.",
  },
  {
    id: 6,
    name: "Danilo",
    location: "Venice, Italy",
    date: "2 years on Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=300&auto=format&fit=crop",
    text: "We loved every minute here. Since we only stayed one night, it was really more of a bucket list item for us. The property is unforgettable.",
  },
];

function ReviewCard({ review }) {
  return (
    <article className="property-review-card">
      <div className="property-review-card__header">
        <img
          src={review.avatar}
          alt={review.name}
          className="property-review-card__avatar"
        />

        <div>
          <h3 className="property-review-card__name">{review.name}</h3>
          <p className="property-review-card__meta">
            {review.location} · {review.date}
          </p>
        </div>
      </div>

      <p className="property-review-card__text">{review.text}</p>

      <button type="button" className="property-review-card__more">
        Show more
      </button>
    </article>
  );
}

export default function PropertyReviews() {
  return (
    <section className="property-reviews-section">
      <div className="property-reviews-section__header">
        <h2 className="property-reviews-section__title">★ 4.90 · 366 reviews</h2>
      </div>

      <div className="property-reviews-stats">
        {ratingStats.map((item) => (
          <div key={item.label} className="property-reviews-stat">
            <span className="property-reviews-stat__label">{item.label}</span>
            <span className="property-reviews-stat__value">{item.value}</span>
            <div className="property-reviews-stat__bars">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        ))}
      </div>

      <div className="property-reviews-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <button type="button" className="property-reviews-section__button">
        Show all 366 reviews
      </button>
    </section>
  );
}