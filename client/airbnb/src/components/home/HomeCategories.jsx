import "./../../styles/home.css";
import "./../../styles/dark.css";
import "./../../styles/light.css";
import "./../../styles/base.css";

const categories = [
  { icon: "⌂", label: "Caves" },
  { icon: "🏠", label: "Cabins" },
  { icon: "🖼", label: "Amazing views" },
  { icon: "🏙", label: "Top cities" },
  { icon: "⛱", label: "Luxe" },
  { icon: "▤", label: "Containers" },
  { icon: "🔥", label: "Trending" },
  { icon: "🗝", label: "New" },
  { icon: "🏰", label: "Historical homes" },
  { icon: "🏡", label: "Earth homes" },
  { icon: "⛵", label: "Boats" },
  { icon: "🌊", label: "Beachfront" },
  { icon: "🛸", label: "OMG!" },
  { icon: "🏕", label: "Tiny homes" },
  { icon: "🏞", label: "National parks" },
  { icon: "🌊", label: "Lake" },
];

export default function HomeCategories({
  onSelectCategory,
  darkMode,
  setDarkMode,
}) {
  return (
    <section className="home-categories-bar">
      <div className="home-categories-scroll">
        {categories.map((item, index) => (
          <button
            key={item.label}
            className="home-category-item"
            type="button"
            onClick={() => onSelectCategory(item.label)}
          >
            <span className="home-category-icon">{item.icon}</span>
            <span className="home-category-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="home-categories-actions">
        <button
          type="button"
          className="categories-arrow-btn"
          aria-label="Next"
        >
          ›
        </button>

        <button type="button" className="categories-filter-btn">
          <span className="categories-filter-icon">⚙</span>
          <span>Filters</span>
        </button>

        <button
          type="button"
          className="categories-toggle-btn"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <span className="toggle-icon">{darkMode ? "🌙" : "☀️"} </span>

          <span className="categories-toggle-circle" />
        </button>
      </div>
    </section>
  );
}
