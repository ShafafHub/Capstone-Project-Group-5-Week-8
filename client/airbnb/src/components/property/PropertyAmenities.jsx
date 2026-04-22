import "./../../styles/property.css";

const amenities = [
  "Bay view",
  "Waterfront",
  "Wine",
  "Private hot tub",
  "Patio or balcony",
  "Sea view",
  "Kitchen",
  "Free parking on premises",
  "Shared sauna",
  "Free washer - in building",
];

export default function PropertyAmenities() {
  return (
    <section className="property-amenities-section">
      <h2 className="property-amenities-section__title">What this place offers</h2>

      <div className="property-amenities-grid">
        {amenities.map((item) => (
          <div key={item} className="property-amenity-item">
            <span className="property-amenity-icon">⌂</span>
            <span className="property-amenity-text">{item}</span>
          </div>
        ))}
      </div>

      <button type="button" className="property-amenities-btn">
        Show all 56 amenities
      </button>
    </section>
  );
}