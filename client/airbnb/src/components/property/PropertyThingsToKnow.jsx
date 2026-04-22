import "./../../styles/property.css";

const columns = [
  {
    title: "House rules",
    items: [
      "Check-in after 4:00 p.m.",
      "Checkout before 11:00 a.m.",
      "6 guests maximum",
    ],
  },
  {
    title: "Safety & property",
    items: [
      "Nearby lake, river, other body of water",
      "Heights without rails or protection",
      "Climbing or play structure",
    ],
  },
  {
    title: "Cancellation policy",
    items: [
      "Free cancellation for 48 hours",
      "Review the Host’s full cancellation policy, which applies even if you cancel for illness or disruptions caused by COVID-19.",
    ],
  },
];

export default function PropertyThingsToKnow() {
  return (
    <section className="property-things-section">
      <h2 className="property-things-section__title">Things to know</h2>

      <div className="property-things-grid">
        {columns.map((column) => (
          <div key={column.title} className="property-things-column">
            <h3 className="property-things-column__title">{column.title}</h3>

            <div className="property-things-column__items">
              {column.items.map((item) => (
                <p key={item} className="property-things-column__item">
                  {item}
                </p>
              ))}
            </div>

            <button type="button" className="property-things-column__more">
              Show more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}