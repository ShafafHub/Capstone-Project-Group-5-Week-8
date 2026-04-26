import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const savedUser = localStorage.getItem("authUser");
  const authUser = savedUser ? JSON.parse(savedUser) : null;

  if (authUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}