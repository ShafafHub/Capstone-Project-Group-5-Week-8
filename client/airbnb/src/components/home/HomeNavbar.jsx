import "./../../styles/home.css";

export default function HomeNavbar() {
  return (
    <header className="home-navbar">
      <div className="home-navbar__left">
        <div className="airbnb-logo">
          <span className="airbnb-logo__icon">⌂</span>
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

        <div className="profile-menu">
          <button className="menu-btn" aria-label="Menu">
            ☰
          </button>

          <button className="avatar-btn" aria-label="Profile">
            A
          </button>
        </div>
      </div>
    </header>
  );
}