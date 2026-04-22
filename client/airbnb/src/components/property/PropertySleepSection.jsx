import "./../../styles/property.css";

const sleepRooms = [
  {
    id: 1,
    title: "Bedroom 1",
    details: "1 queen bed, 1 hammock",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Bedroom 2",
    details: "1 double bed, 1 hammock",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PropertySleepSection() {
  return (
    <section className="property-sleep-section">
      <div className="property-sleep-section__header">
        <h2 className="property-sleep-section__title">Where you'll sleep</h2>

        <div className="property-sleep-section__nav">
          <span className="property-sleep-section__count">1 / 2</span>

          <button
            type="button"
            className="property-sleep-section__nav-btn property-sleep-section__nav-btn--disabled"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            type="button"
            className="property-sleep-section__nav-btn"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div className="property-sleep-grid">
        {sleepRooms.map((room) => (
          <article key={room.id} className="property-sleep-card">
            <div className="property-sleep-card__image-wrap">
              <img
                src={room.image}
                alt={room.title}
                className="property-sleep-card__image"
              />
            </div>

            <div className="property-sleep-card__content">
              <h3 className="property-sleep-card__title">{room.title}</h3>
              <p className="property-sleep-card__details">{room.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}