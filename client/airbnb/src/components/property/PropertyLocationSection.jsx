import "./../../styles/property.css";

export default function PropertyLocationSection({ listing }) {
  return (
    <section className="property-location-section">
      <div className="property-location-section__header">
        <h2 className="property-location-section__title">Where you'll be</h2>
        <p className="property-location-section__subtitle">
          {listing?.location || "Port Angeles, Washington, United States"}
        </p>
      </div>

      <div className="property-location-map">
        <div className="property-location-map__water" />
        <div className="property-location-map__land" />

        <div className="property-location-map__roads">
          <span className="road road--one" />
          <span className="road road--two" />
          <span className="road road--three" />
        </div>

        <div className="property-location-map__town town--left">Port Angeles East</div>
        <div className="property-location-map__town town--center">Crane</div>
        <div className="property-location-map__town town--right">Agnew</div>

        <div className="property-location-map__top-right">
          <div className="property-location-map__badge">
            <span className="property-location-map__checkbox" />
            <span>Public Transit</span>
          </div>

          <button type="button" className="property-location-map__street-view">
            🧍
          </button>
        </div>

        <div className="property-location-map__zoom-controls">
          <button type="button">+</button>
          <button type="button">−</button>
        </div>

        <div className="property-location-map__pin-wrap">
          <div className="property-location-map__pin-ring" />
          <div className="property-location-map__pin">
            <span className="property-location-map__pin-dot">✓</span>
          </div>
          <div className="property-location-map__label">Verified listing</div>
        </div>

        <div className="property-location-map__footer">
          <span>Google</span>
          <span>Keyboard shortcuts</span>
          <span>Map data ©2024 Google</span>
          <span>1 km</span>
          <span>Terms</span>
          <span>Report a map error</span>
        </div>
      </div>

      <p className="property-location-note">
        We verified that this listing’s location is accurate.{" "}
        <a href="/" className="property-location-link">
          Learn more
        </a>
      </p>

      <div className="property-location-highlights">
        <h3 className="property-location-highlights__title">
          Neighborhood highlights
        </h3>

        <p className="property-location-highlights__text">
          We are at the edge of a development down a dead-end road. There is a
          house at the front of the property 250 feet away.
        </p>

        <p className="property-location-highlights__text">
          Beautiful surroundings and peaceful views make this stay feel calm,
          private, and memorable.
        </p>

        <button type="button" className="property-location-show-more">
          Show more
        </button>
      </div>
    </section>
  );
}