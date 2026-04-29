import "./../../styles/property.css";

export default function PropertySummary({ listing }) {
  if (!listing) return null;

  const priceText = listing.price || "$750 CAD";
  const stayTitle = `${listing.category || "Stay"} in ${listing.location || "Unknown location"}`;

  return (
    <section className="property-summary">
      <div className="property-summary__left">
        <div className="property-summary__header">
          <div>
            <h2 className="property-summary__title">{stayTitle}</h2>
            <p className="property-summary__meta">
              6 guests · 2 bedrooms · 3 beds · 1 bath
            </p>
          </div>
        </div>

        <div className="property-host-row">
          <div className="property-host-row__left">
            <img
              className="property-host-avatar"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
              alt="Hosted by Beverly"
            />
            <div>
              <h3 className="property-host-name">Hosted by Beverly</h3>
              <p className="property-host-subtitle">Superhost · 3 years hosting</p>
            </div>
          </div>
        </div>

        <div className="property-divider" />

        <div className="property-feature-list">
          <div className="property-feature-item">
            <div className="property-feature-icon">🏅</div>
            <div>
              <h4>Featured in</h4>
              <p>Condé Nast Traveler, November 2022</p>
            </div>
          </div>

          <div className="property-feature-item">
            <div className="property-feature-icon">🧑‍🎨</div>
            <div>
              <h4>Designed by</h4>
              <p>Beth Cody · Based in Seattle</p>
            </div>
          </div>

          <div className="property-feature-item">
            <div className="property-feature-icon">✓</div>
            <div>
              <h4>Free cancellation for 48 hours</h4>
              <p>Get a full refund if you change your mind.</p>
            </div>
          </div>
        </div>

        <div className="property-divider" />

        <div className="property-description">
          <p>
            Enjoy a memorable stay in {listing.location}. This place offers a calm
            atmosphere, beautiful surroundings, and a comfortable experience for guests.
          </p>

          <p>
            Every detail is designed to make the stay relaxing and enjoyable, whether
            you are traveling as a couple, family, or group of friends.
          </p>

          <button type="button" className="property-show-more">
            Show more
          </button>
        </div>
      </div>

      <aside className="property-summary__right">
        <div className="booking-card">
          <div className="booking-card__price-row">
            <div>
              <span className="booking-card__price">{priceText}</span>
              <span className="booking-card__night"> night</span>
            </div>
          </div>

          <div className="booking-card__form">
            <div className="booking-card__dates">
              <div className="booking-card__field">
                <label>CHECK-IN</label>
                <span>5/12/2024</span>
              </div>
              <div className="booking-card__field">
                <label>CHECKOUT</label>
                <span>5/17/2024</span>
              </div>
            </div>

            <div className="booking-card__guests">
              <label>GUESTS</label>
              <span>1 guest</span>
              <span className="booking-card__chevron">⌄</span>
            </div>

            <button type="button" className="booking-card__reserve-btn">
              Reserve
            </button>
          </div>

          <p className="booking-card__notice">You won’t be charged yet</p>

          <div className="booking-card__breakdown">
            <div className="booking-card__line">
              <span>{priceText} x 5 nights</span>
              <span>{priceText}</span>
            </div>
            <div className="booking-card__line">
              <span>Cleaning fee</span>
              <span>$162 CAD</span>
            </div>
            <div className="booking-card__line">
              <span>Airbnb service fee</span>
              <span>$344 CAD</span>
            </div>
            <div className="booking-card__line">
              <span>Taxes</span>
              <span>$455 CAD</span>
            </div>
          </div>

          <div className="booking-card__total">
            <span>Total</span>
            <span>$4,651 CAD</span>
          </div>

          <div className="booking-card__rare-find">
            <div className="booking-card__rare-icon">💎</div>
            <p>This is a rare find. This place is usually fully booked.</p>
          </div>
        </div>

        <button type="button" className="property-report-link">
          Report this listing
        </button>
      </aside>
    </section>
  );
}