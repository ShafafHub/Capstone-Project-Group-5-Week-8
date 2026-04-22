import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../../styles/property.css";

export default function PropertyGallery() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/listings/${id}`);
        const data = await res.json();
        setListing(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!listing) return <p>No listing found</p>;

  return (
    <section className="property-gallery-page">
      {/* HEADER */}
      <div className="property-gallery-header">
        <h1 className="property-gallery-title">{listing.title}</h1>

        <div className="property-gallery-meta-row">
          <div className="property-gallery-meta-left">
            <span className="property-meta-rating">★ {listing.rating}</span>

            <span className="property-meta-dot">·</span>

            <a href="/" className="property-meta-link">
              {listing.reviews} reviews
            </a>

            <span className="property-meta-dot">·</span>

            <a href="/" className="property-meta-link">
              Superhost
            </a>

            <span className="property-meta-dot">·</span>

            <a href="/" className="property-meta-link">
              {listing.location}
            </a>
          </div>

          <div className="property-gallery-meta-actions">
            <button type="button" className="property-meta-btn">
              <span>↗</span>
              <span>Share</span>
            </button>

            <button type="button" className="property-meta-btn">
              <span>♡</span>
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="property-gallery-grid">
        {/* MAIN IMAGE */}
        <div className="property-gallery-main">
          <img src={listing.images?.[0]} alt="Property main view" />
        </div>

        {/* SIDE IMAGES */}
        <div className="property-gallery-side">
          {listing.images?.slice(1, 4).map((img, index) => (
            <div key={index} className="property-gallery-side-item">
              <img src={img} alt={`Property view ${index}`} />
            </div>
          ))}

          <div className="property-gallery-side-item property-gallery-side-item--last">
            <img src={listing.images?.[4]} alt="Property view" />

            <button type="button" className="show-all-photos-btn">
              <span>⊞</span>
              <span>Show all photos</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
