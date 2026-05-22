import { Navigate } from "react-router-dom";

// Protected Route Wrapper Component
export const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
