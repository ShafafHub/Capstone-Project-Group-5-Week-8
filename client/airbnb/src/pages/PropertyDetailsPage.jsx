import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PropertyNavbar from "../components/property/PropertyNavbar";
import PropertyGallery from "../components/property/PropertyGallery";
import PropertySummary from "../components/property/PropertySummary";
import PropertySleepSection from "../components/property/PropertySleepSection";
import PropertyAmenities from "../components/property/PropertyAmenities";
import PropertyCalendarSection from "../components/property/PropertyCalendarSection";
import PropertyReviews from "../components/property/PropertyReviews";
import PropertyLocationSection from "../components/property/PropertyLocationSection";
import PropertyHostSection from "../components/property/PropertyHostSection";
import PropertyThingsToKnow from "../components/property/PropertyThingsToKnow";
import PropertyFooter from "../components/property/PropertyFooter";

import "../styles/property-details.css";

export default function PropertyDetailsPage() {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPropertyDetails() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`http://localhost:5000/api/listings/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch property details");
        }

        setListing(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="property-details-page">
        <PropertyNavbar listing={listing} />
        <main className="property-state-wrapper">
          <div className="property-state-card">
            <h2>Loading property...</h2>
            <p>Please wait while we load the property details.</p>
          </div>
        </main>
        <PropertyFooter />
      </div>
    );
  }

  if (error) {
    return (
      <div className="property-details-page">
        <PropertyNavbar listing={listing} />
        <main className="property-state-wrapper">
          <div className="property-state-card">
            <h2>Unable to load property</h2>
            <p>{error}</p>
          </div>
        </main>
        <PropertyFooter />
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="property-details-page">
        <PropertyNavbar listing={listing} />
        <main className="property-state-wrapper">
          <div className="property-state-card">
            <h2>Property not found</h2>
            <p>The property you are looking for does not exist.</p>
          </div>
        </main>
        <PropertyFooter />
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <PropertyNavbar listing={listing} />
      <PropertyGallery listing={listing} />
      <PropertySummary listing={listing} />
      <PropertySleepSection listing={listing} />
      <PropertyAmenities listing={listing} />
      <PropertyCalendarSection listing={listing} />
      <PropertyReviews listing={listing} />
      <PropertyLocationSection listing={listing} />
      <PropertyHostSection listing={listing} />
      <PropertyThingsToKnow listing={listing} />
      <PropertyFooter />
    </div>
  );
}