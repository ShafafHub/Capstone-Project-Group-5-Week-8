import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropertyNavbar from "../components/property/PropertyNavbar";
import PropertyFooter from "../components/property/PropertyFooter";
import "../styles/property-photos.css";

export default function PropertyPhotosPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [darkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchListing() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`http://localhost:5000/api/listings/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load photos");
        }

        setListing(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchListing();
  }, [id]);

  if (loading) {
    return (
      <div className={darkMode ? "app dark" : "app"}>
        <div className="property-photos-page">
          <PropertyNavbar />
          <main className="property-photos-state">
            <div className="property-photos-state__card">
              <h2>Loading photos...</h2>
              <p>Please wait while we load all property images.</p>
            </div>
          </main>
          <PropertyFooter />
        </div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className={darkMode ? "app dark" : "app"}>
        <div className="property-photos-page">
          <PropertyNavbar />
          <main className="property-photos-state">
            <div className="property-photos-state__card">
              <h2>Unable to load photos</h2>
              <p>{error || "Property not found."}</p>

              <button
                type="button"
                className="property-photos-back-btn"
                onClick={() => navigate(`/property/${id}`)}
              >
                Back to property
              </button>
            </div>
          </main>
          <PropertyFooter />
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="property-photos-page">
        <PropertyNavbar />

        <main className="property-photos-content">
          <div className="property-photos-header">
            <div>
              <h1 className="property-photos-title">
                All photos - {listing.location}
              </h1>
              <p className="property-photos-subtitle">
                {listing.images?.length || 0} photos available
              </p>
            </div>

            <button
              type="button"
              className="property-photos-back-btn"
              onClick={() => navigate(`/property/${id}`)}
            >
              Back to property
            </button>
          </div>

          <div className="property-photos-grid">
            {listing.images?.map((image, index) => (
              <div key={index} className="property-photos-item">
                <img
                  src={image}
                  alt={`${listing.location} ${index + 1}`}
                  className="property-photos-image"
                />
              </div>
            ))}
          </div>
        </main>

        <PropertyFooter />
      </div>
    </div>
  );
}