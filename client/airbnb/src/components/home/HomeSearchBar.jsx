import { useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
import "./../../styles/home.css";

export default function HomeSearchBar({ search, onSearch }) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="home-search-wrapper">
      <div className="home-search-bar">
        <button
          type="button"
          className="search-section search-section--where"
          onClick={() => setShowInput(true)}
        >
          <span className="search-label">Where</span>

          {showInput ? (
            <input
              type="text"
              placeholder="Search destinations"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="search-input search-inside"
              autoFocus
            />
          ) : (
            <span className="search-value">
              {search || "Search destinations"}
            </span>
          )}
        </button>

        <div className="search-divider" />

        <button type="button" className="search-section">
          <span className="search-label">Check in</span>
          <span className="search-value search-value--muted">Add dates</span>
        </button>

        <div className="search-divider" />

        <button type="button" className="search-section">
          <span className="search-label">Check out</span>
          <span className="search-value search-value--muted">Add dates</span>
        </button>

        <div className="search-divider" />

        <button
          type="button"
          className="search-section search-section--guests"
          onClick={() => onSearch(search)}
        >
          <div className="search-guests-text">
            <span className="search-label">Who</span>
            <span className="search-value search-value--muted">Add guests</span>
          </div>

          <span className="search-action-btn">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </span>
        </button>
      </div>
    </div>
  );
}