import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./../../styles/property.css";
import airbnbLogo from "../../assets/icons/airbnb-logo.svg";
import { getAuthUser, clearAuthUser } from "../../utils/auth";

export default function PropertyNavbar() {
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(() => getAuthUser());

  function handleLogout() {
    clearAuthUser();
    setAuthUser(null);
    navigate("/signin");
  }

  return (
    <header className="property-navbar">
      <div className="property-navbar__left">
        <div className="property-navbar__logo">
          <Link to="/" className="airbnb-logo">
            <img
              src={airbnbLogo}
              alt="logo"
              style={{ width: "29.83px", height: "32px" }}
            />
            <span className="airbnb-logo__text">airbnb</span>
          </Link>
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

        <button
          type="button"
          className="property-navbar__icon-btn"
          aria-label="Language"
        >
          🌐
        </button>

        {authUser ? (
          <div className="property-navbar__profile">
            <span className="property-navbar-user-name">
              {authUser.fullName || authUser.email}
            </span>

            <button
              className="property-navbar__logout-btn"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>

            <button
              type="button"
              className="property-navbar__avatar-btn"
              aria-label="Profile"
            >
              {(authUser.fullName || authUser.email || "A")
                .charAt(0)
                .toUpperCase()}
            </button>
          </div>
        ) : (
          <div className="property-navbar__profile">
            <button
              type="button"
              className="property-navbar__menu-btn"
              aria-label="Menu"
            >
              ☰
            </button>

            <button
              type="button"
              className="property-navbar__avatar-btn"
              aria-label="Profile"
              onClick={() => navigate("/signin")}
            >
              A
            </button>
          </div>
        )}
      </div>
    </header>
  );
}