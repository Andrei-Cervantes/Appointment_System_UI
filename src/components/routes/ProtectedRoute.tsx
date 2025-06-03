import useUserStore from "@/zustand/UserStore";
import { useLocation, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  accessMode: "auth" | "public";
}

const ProtectedRoute = ({ children, accessMode }: ProtectedRouteProps) => {
  const user = useUserStore((state) => state.user);
  const location = useLocation();

  const isAuthenticated = user?.isVerified;
  console.log(isAuthenticated);
  console.log(accessMode);
  console.log(user?.role);

  // For authenticated routes
  if (accessMode === "auth" && !isAuthenticated) {
    return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
  }

  // For public routes (redirect authenticated users)
  if (accessMode === "public" && isAuthenticated) {
    if (user?.role === "client") {
      return (
        <Navigate to="/client/dashboard" state={{ from: location }} replace />
      );
    } else if (user?.role === "provider") {
      return (
        <Navigate to="/provider/dashboard" state={{ from: location }} replace />
      );
    } else if (user?.role === "admin") {
      return (
        <Navigate to="/admin/dashboard" state={{ from: location }} replace />
      );
    }
  }

  // If we reach here, user should see the protected content
  return <div>{children}</div>;
};

export default ProtectedRoute;
