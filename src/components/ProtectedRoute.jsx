import { Navigate, useLocation } from "react-router-dom";

function isAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const raw = window.localStorage.getItem("mogify-auth");
    if (!raw) {
      return false;
    }

    const parsed = JSON.parse(raw);
    return Boolean(parsed?.isAuthenticated);
  } catch {
    return false;
  }
}

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
