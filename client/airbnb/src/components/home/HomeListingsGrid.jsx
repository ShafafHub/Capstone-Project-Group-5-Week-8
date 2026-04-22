import { useEffect, useState } from "react";
import "./../../styles/home.css";

import { useNavigate } from "react-router-dom";

function ListingCard({ item }) {
  const navigate = useNavigate();

  return (
    <article
      className="listing-card"
      onClick={() => navigate(`/property/${item._id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="listing-card__image-wrap">
        {item.badge ? (
          <span className="listing-card__badge">{item.badge}</span>
        ) : null}

        <button
          className="listing-card__heart"
          type="button"
          onClick={(e) => e.stopPropagation()} // ⛔ مهم
        >
          {item.favorite ? "♥" : "♡"}
        </button>

        <img
          src={item.image}
          alt={item.location}
          className="listing-card__image"
          loading="lazy"
        />

        <div className="listing-card__dots">
          <span className="listing-card__dot listing-card__dot--active" />
          <span className="listing-card__dot" />
          <span className="listing-card__dot" />
          <span className="listing-card__dot" />
        </div>
      </div>

      <div className="listing-card__content">
        <div className="listing-card__top-row">
          <h3 className="listing-card__title">{item.location}</h3>
          <div className="listing-card__rating">
            <span className="listing-card__star">★</span>
            <span>{item.rating}</span>
          </div>
        </div>

        <p className="listing-card__meta">{item.distance}</p>
        <p className="listing-card__meta">{item.dates}</p>
        <p className="listing-card__price">
          <span>{item.price}</span> <span>night</span>
        </p>
      </div>
    </article>
  );
}

export default function HomeListingsGrid() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{textAlign:'center',marginTop:"200px",fontSize:"200px"}}>Loading...</p>;

  return (
    <section className="home-listings">
      <div className="home-listings__grid">
        {listings.map((item) => (
          <ListingCard key={item._id} item={item} />
        ))}
      </div>

      <button type="button" className="show-map-btn">
        Show map
      </button>
    </section>
  );
}
