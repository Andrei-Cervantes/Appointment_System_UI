import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserStore from "../zustand/UserStore";

// Types
type AccessRole = "client" | "provider" | "admin";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: AccessRole;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
  redirectPath = "/login",
}) => {
  const location = useLocation();
  const user = useUserStore((state) => state.user);

  const isVerified = user?.isVerified;

  switch (allowedRoles) {
    case "client":
      if (!isVerified && user?.role !== "client") {
        return (
          <Navigate to={redirectPath} state={{ from: location }} replace />
        );
      }
      break;
    case "provider":
      if (!isVerified) {
        return (
          <Navigate to={redirectPath} state={{ from: location }} replace />
        );
      }
      break;
    case "admin":
      if (!isVerified && user?.role !== "admin") {
        return (
          <Navigate to={redirectPath} state={{ from: location }} replace />
        );
      }
      break;
    default:
      if (!isVerified) {
        return (
          <Navigate to={redirectPath} state={{ from: location }} replace />
        );
      }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
