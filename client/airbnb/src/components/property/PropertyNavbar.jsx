import "./../../styles/property.css";

import airbnbLogo from "../../assets/icons/airbnb-logo.svg";

export default function PropertyNavbar() {
  return (
    <header className="property-navbar">
      <div className="property-navbar__left">
        <div className="property-navbar__logo">
          
          <img src={airbnbLogo} alt="logo" style={{width:"29.83px",height:"32px"}} />
          <span className="property-navbar__logo-text">airbnb</span>
        </div>
      </div>

      <div className="property-navbar__center">
        <button type="button" className="property-search-pill">
          <span>Anywhere</span>
          <span className="property-search-divider" />
          <span>Any week</span>
          <span className="property-search-divider" />
          <span className="property-search-muted">Add guests</span>
          <span className="property-search-icon">⌕</span>
        </button>
      </div>

      <div className="property-navbar__right">
        <button type="button" className="property-navbar__host-btn">
          Airbnb your home
        </button>

        <button type="button" className="property-navbar__icon-btn" aria-label="Language">
          🌐
        </button>

        <div className="property-navbar__profile">
          <button type="button" className="property-navbar__menu-btn" aria-label="Menu">
            ☰
          </button>
          <button type="button" className="property-navbar__avatar-btn" aria-label="Profile">
            A
          </button>
        </div>
      </div>
    </header>
  );
}