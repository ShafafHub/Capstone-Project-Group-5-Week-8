import HomeNavbar from "../components/home/HomeNavbar";
import HomeSearchBar from "../components/home/HomeSearchBar";

import HomeCategories from "../components/home/HomeCategories"
import HomeListingsGrid from "../components/home/HomeListingsGrid";

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeNavbar />
      <HomeSearchBar/>
      <HomeCategories/>
      <HomeListingsGrid/>
    </div>
  );
}