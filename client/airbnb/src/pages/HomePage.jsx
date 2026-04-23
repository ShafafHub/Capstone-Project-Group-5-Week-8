import { useState } from "react";
import HomeNavbar from "../components/home/HomeNavbar";
import HomeSearchBar from "../components/home/HomeSearchBar";
import HomeCategories from "../components/home/HomeCategories";
import HomeListingsGrid from "../components/home/HomeListingsGrid";
import HomeFooter from "../components/home/HomeFooter";

export default function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <div className="home-page">
      <HomeNavbar />
      <HomeSearchBar onSearch={setSearch} />
      <HomeCategories />
      <HomeListingsGrid search={search} />
      <HomeFooter />
    </div>
  );
}
