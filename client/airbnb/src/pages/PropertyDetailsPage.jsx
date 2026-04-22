import PropertyNavbar from "../components/property/PropertyNavbar";

import PropertyGallery from "../components/property/PropertyGallery";

import PropertySummary from "../components/property/PropertySummary";

export default function PropertyDetailsPage() {
  return (
    <div>
      <PropertyNavbar />
      <PropertyGallery />
      <PropertySummary/>
    </div>
  );
}
