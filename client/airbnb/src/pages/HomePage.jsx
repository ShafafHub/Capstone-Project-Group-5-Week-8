import HomeNavbar from "../components/home/HomeNavbar";
import HomeSearchBar from "../components/home/HomeSearchBar";

import HomeCategories from "../components/home/HomeCategories"

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeNavbar />
      <HomeSearchBar/>
      <HomeCategories/>
    </div>
  );
}