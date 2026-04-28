import { useState } from "react";
import HomeNavbar from "../components/home/HomeNavbar";
import HomeSearchBar from "../components/home/HomeSearchBar";
import HomeCategories from "../components/home/HomeCategories";
import HomeListingsGrid from "../components/home/HomeListingsGrid";
import HomeFooter from "../components/home/HomeFooter";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function handleGoHome() {
    setSearch("");
    setCategory("");
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <HomeNavbar onGoHome={handleGoHome} />
      <HomeSearchBar search={search} onSearch={setSearch} />
      <div className="home-search-categories-gap" />
      <HomeCategories
        onSelectCategory={setCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <HomeListingsGrid search={search} category={category} />
      <HomeFooter />
    </div>
  );
}