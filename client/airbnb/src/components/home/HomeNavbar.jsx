import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../styles/home.css";
import airbnbLogo from "../../assets/icons/airbnb-logo.svg";

export default function HomeNavbar() {
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(() => {
    const savedUser = localStorage.getItem("authUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function handleLogout() {
    localStorage.removeItem("authUser");
    setAuthUser(null);
    navigate("/signin");
  }

  return (
    <header className="home-navbar">
      <div className="home-navbar__left">
        <div className="airbnb-logo">
          <img
            src={airbnbLogo}
            alt="logo"
            style={{ width: "29.83px", height: "32px" }}
          />
          <span className="airbnb-logo__text">airbnb</span>
        </div>
      </div>

      <nav className="home-navbar__center">
        <button className="nav-tab nav-tab--active">Stays</button>
        <button className="nav-tab">Experiences</button>
        <button className="nav-tab">Online Experiences</button>
      </nav>

      <div className="home-navbar__right">
        <button className="airbnb-home-btn">Airbnb your home</button>

        <button className="icon-btn" aria-label="Language">
          🌐
        </button>

        {authUser ? (
          <div className="profile-menu">
            <span className="navbar-user-name">
              {authUser.fullName || authUser.email}
            </span>

            <button
              className="logout-btn"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>

            <button className="avatar-btn" aria-label="Profile">
              {(authUser.fullName || authUser.email || "A")
                .charAt(0)
                .toUpperCase()}
            </button>
          </div>
        ) : (
          <div className="profile-menu">
            <button className="menu-btn" aria-label="Menu">
              ☰
            </button>

            <button
              className="avatar-btn"
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