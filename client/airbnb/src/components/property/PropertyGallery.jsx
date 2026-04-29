import "./../../styles/property.css";

export default function PropertyGallery({ listing }) {
  if (!listing) return null;

  const images = listing.images || [];
  const mainImage = images[0];
  const sideImages = images.slice(1, 4);
  const lastImage = images[4] || images[0];

  return (
    <section className="property-gallery-page">
      <div className="property-gallery-header">
        <h1 className="property-gallery-title">
          {listing.location || "Property details"}
        </h1>

        <div className="property-gallery-meta-row">
          <div className="property-gallery-meta-left">
            <span className="property-meta-rating">★ {listing.rating || "4.9"}</span>

            <span className="property-meta-dot">·</span>

            <a href="/" className="property-meta-link">
              366 reviews
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

      <div className="property-gallery-grid">
        <div className="property-gallery-main">
          <img src={mainImage} alt={`${listing.location} main view`} />
        </div>

        <div className="property-gallery-side">
          {sideImages.map((img, index) => (
            <div key={index} className="property-gallery-side-item">
              <img src={img} alt={`${listing.location} view ${index + 2}`} />
            </div>
          ))}

          <div className="property-gallery-side-item property-gallery-side-item--last">
            <img src={lastImage} alt={`${listing.location} extra view`} />

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