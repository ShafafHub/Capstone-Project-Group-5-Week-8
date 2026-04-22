import PropertyNavbar from "../components/property/PropertyNavbar";

import PropertyGallery from "../components/property/PropertyGallery";

import PropertySummary from "../components/property/PropertySummary";

import PropertySleepSection from "../components/property/PropertySleepSection";
import PropertyAmenities from "../components/property/PropertyAmenities";

export default function PropertyDetailsPage() {
  return (
    <div>
      <PropertyNavbar />
      <PropertyGallery />
      <PropertySummary />
      <PropertySleepSection />
      <PropertyAmenities />
    </div>
  );
}
