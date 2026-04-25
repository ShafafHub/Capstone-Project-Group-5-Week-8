import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import PropertyDetailsPage from "./Pages/PropertyDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/property/:id", element: <PropertyDetailsPage /> },
]);

export default router;