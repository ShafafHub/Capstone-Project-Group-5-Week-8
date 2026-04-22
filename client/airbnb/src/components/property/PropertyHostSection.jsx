import "./../../styles/property.css";

export default function PropertyHostSection() {
  return (
    <section className="property-host-section">
      <h2 className="property-host-section__title">Meet your host</h2>

      <div className="property-host-layout">
        <div className="property-host-card">
          <div className="property-host-card__top">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
              alt="Beverly"
              className="property-host-card__avatar"
            />

            <div className="property-host-card__identity">
              <h3 className="property-host-card__name">Beverly</h3>
              <p className="property-host-card__badge">★ Superhost</p>
            </div>
          </div>

          <div className="property-host-card__stats">
            <div className="property-host-card__stat">
              <strong>3947</strong>
              <span>Reviews</span>
            </div>

            <div className="property-host-card__stat">
              <strong>4.87 ★</strong>
              <span>Rating</span>
            </div>

            <div className="property-host-card__stat">
              <strong>7</strong>
              <span>Years hosting</span>
            </div>
          </div>

          <div className="property-host-card__facts">
            <p>✦ Born in the 60s</p>
            <p>♡ What I love: to shoot, Timberline and Olympic</p>
          </div>

          <div className="property-host-card__about">
            <p>
              We have grown up in the Northwest all of our lives. We love to be
              outside, surfing, hiking, gardening...
            </p>

            <button type="button" className="property-host-card__show-more">
              Show more
            </button>
          </div>
        </div>

        <div className="property-host-content">
          <div className="property-host-content__block">
            <h3 className="property-host-content__heading">
              Beverly is a Superhost
            </h3>
            <p className="property-host-content__text">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
          </div>

          <div className="property-host-content__block">
            <h3 className="property-host-content__heading">Host details</h3>

            <div className="property-host-content__details">
              <p>Response rate: 100%</p>
              <p>Responds within an hour</p>
            </div>

            <button type="button" className="property-host-content__button">
              Message Host
            </button>
          </div>

          <p className="property-host-content__note">
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
        </div>
      </div>
    </section>
  );
}