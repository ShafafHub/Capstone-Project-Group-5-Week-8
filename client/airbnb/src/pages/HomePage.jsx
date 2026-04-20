import HomeNavbar from "../components/home/HomeNavbar";
import HomeSearchBar from "../components/home/HomeSearchBar";

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeNavbar />
      <HomeSearchBar/>
    </div>
  );
}