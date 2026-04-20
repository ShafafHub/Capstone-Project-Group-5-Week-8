import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/property/:id", element: <PropertyDetailsPage /> },
]);

export default router;