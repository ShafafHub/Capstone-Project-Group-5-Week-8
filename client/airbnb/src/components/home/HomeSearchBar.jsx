import searchIcon from "../../assets/icons/search.svg";
import "./../../styles/home.css";

export default function HomeSearchBar() {
  return (
    <div className="home-search-wrapper">
      <div className="home-search-bar">
        <button className="search-section search-section--where">
          <span className="search-label">Where</span>
          <span className="search-value">Search destinations</span>
        </button>

        <div className="search-divider" />

        <button className="search-section">
          <span className="search-label">Check in</span>
          <span className="search-value search-value--muted">Add dates</span>
        </button>

        <div className="search-divider" />

        <button className="search-section">
          <span className="search-label">Check out</span>
          <span className="search-value search-value--muted">Add dates</span>
        </button>

        <div className="search-divider" />

        <button className="search-section search-section--guests">
          <div className="search-guests-text">
            <span className="search-label">Who</span>
            <span className="search-value search-value--muted">
              Add guests
            </span>
          </div>

          <span className="search-action-btn">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </span>
        </button>
      </div>
    </div>
  );
}