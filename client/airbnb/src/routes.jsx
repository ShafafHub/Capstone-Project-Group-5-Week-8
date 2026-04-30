import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import PropertyDetailsPage from "./Pages/PropertyDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import PropertyPhotosPage from "./Pages/PropertyPhotosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/property/:id",
    element: (
      <ProtectedRoute>
        <PropertyDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/property/:id/photos",
    element: (
      <ProtectedRoute>
        <PropertyPhotosPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <PublicRoute>
        <SignInPage />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
]);

export default router;
