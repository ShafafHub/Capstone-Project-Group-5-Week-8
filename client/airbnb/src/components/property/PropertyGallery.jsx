import "./../../styles/property.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1000&auto=format&fit=crop",
];

export default function PropertyGallery() {
  return (
    <section className="property-gallery-page">
      <div className="property-gallery-header">
        <h1 className="property-gallery-title">
          Earthen home hosted by Adam
        </h1>

        <div className="property-gallery-meta-row">
          <div className="property-gallery-meta-left">
            <span className="property-meta-rating">★ 4.98</span>
            <span className="property-meta-dot">·</span>
            <a href="/" className="property-meta-link">
              61 reviews
            </a>
            <span className="property-meta-dot">·</span>
            <a href="/" className="property-meta-link">
              Superhost
            </a>
            <span className="property-meta-dot">·</span>
            <a href="/" className="property-meta-link">
              Cortez, Colorado, United States
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
          <img src={galleryImages[0]} alt="Property main view" />
        </div>

        <div className="property-gallery-side">
          <div className="property-gallery-side-item">
            <img src={galleryImages[1]} alt="Property view 1" />
          </div>
          <div className="property-gallery-side-item">
            <img src={galleryImages[2]} alt="Property view 2" />
          </div>
          <div className="property-gallery-side-item">
            <img src={galleryImages[3]} alt="Property view 3" />
          </div>
          <div className="property-gallery-side-item property-gallery-side-item--last">
            <img src={galleryImages[4]} alt="Property view 4" />
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