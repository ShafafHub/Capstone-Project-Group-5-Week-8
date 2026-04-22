import "./../../styles/home.css";

const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    location: "Bourré, France",
    distance: "8,015 km away",
    dates: "Apr. 19 – 24",
    price: "$154 CAD",
    rating: "4.84",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    location: "Noyers-sur-Cher, France",
    distance: "8,028 km away",
    dates: "May 19 – 24",
    price: "$320 CAD",
    rating: "4.82",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    location: "Cortez, Colorado, US",
    distance: "1,757 km away",
    dates: "Jul. 7 – 12",
    price: "$572 CAD",
    rating: "4.98",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop",
    location: "Los Balcones, Spain",
    distance: "8,725 km away",
    dates: "Apr. 18 – 23",
    price: "$304 CAD",
    rating: "5.0",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    location: "Hanksville, Utah, US",
    distance: "1,562 km away",
    dates: "May 5 – 10",
    price: "$685 CAD",
    rating: "4.84",
    favorite: false,
    badge: "",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
    location: "Brissac-Loire-Aubance, France",
    distance: "7,945 km away",
    dates: "May 11 – 16",
    price: "$511 CAD",
    rating: "4.96",
    favorite: true,
    badge: "",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    location: "Roswell, New Mexico, US",
    distance: "2,352 km away",
    dates: "May 2 – 7",
    price: "$872 CAD",
    rating: "4.99",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1200&auto=format&fit=crop",
    location: "Broadway, Virginia, US",
    distance: "3,672 km away",
    dates: "Nov. 30 – Dec. 5",
    price: "$276 CAD",
    rating: "4.99",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1200&auto=format&fit=crop",
    location: "Jaunay-Marigny, France",
    distance: "8,033 km away",
    dates: "Aug. 26 – 31",
    price: "$311 CAD",
    rating: "4.98",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    location: "Villarrubia, Spain",
    distance: "8,585 km away",
    dates: "May 2 – 7",
    price: "$343 CAD",
    rating: "4.9",
    favorite: false,
    badge: "",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
    location: "Puntallana, Spain",
    distance: "8,646 km away",
    dates: "Jul. 18 – 25",
    price: "$196 CAD",
    rating: "5.0",
    favorite: true,
    badge: "Guest favourite",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    location: "Río de Baza, Spain",
    distance: "8,730 km away",
    dates: "Aug. 30 – Sep. 4",
    price: "$256 CAD",
    rating: "5.0",
    favorite: true,
    badge: "Guest favourite",
  },
];

function ListingCard({ item }) {
  return (
    <article className="listing-card">
      <div className="listing-card__image-wrap">
        {item.badge ? <span className="listing-card__badge">{item.badge}</span> : null}

        <button className="listing-card__heart" type="button" aria-label="Save listing">
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
  return (
    <section className="home-listings">
      <div className="home-listings__grid">
        {listings.map((item) => (
          <ListingCard key={item.id} item={item} />
        ))}
      </div>

      <button type="button" className="show-map-btn">
        Show map
      </button>
    </section>
  );
}