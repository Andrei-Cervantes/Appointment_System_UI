import { useLocation } from "react-router-dom";
import useUserStore from "@/zustand/UserStore";
import ClientLayout from "@/layouts/ClientLayout";
import ProviderLayout from "@/layouts/ProviderLayout";
import AdminLayout from "@/layouts/AdminLayout";
import { Navigate } from "react-router-dom";

const RoleBasedLayout = () => {
  const user = useUserStore((state) => state.user);
  const location = useLocation();

  // Define route access rules
  const clientRoutes = [
    "/dashboard",
    "/book-appointment",
    "/appointment-history",
    "/service-list",
  ];
  const providerRoutes = [
    "/dashboard",
    "/manage-availability",
    "/manage-services",
    "/appointment-details",
  ];
  const adminRoutes = ["/dashboard", "/manage-users", "/all-appointments"];

  const getCurrentUserRoutes = () => {
    switch (user?.role) {
      case "client":
        return clientRoutes;
      case "provider":
        return providerRoutes;
      case "admin":
        return adminRoutes;
      default:
        return [];
    }
  };

  const isRouteAllowed = () => {
    const allowedRoutes = getCurrentUserRoutes();
    return allowedRoutes.includes(location.pathname);
  };

  // Redirect to dashboard if trying to access unauthorized route
  if (!isRouteAllowed() && location.pathname !== "/dashboard") {
    return <Navigate to="/dashboard" replace />;
  }

  const LayoutComponent = () => {
    switch (user?.role) {
      case "client":
        return <ClientLayout />;
      case "provider":
        return <ProviderLayout />;
      case "admin":
        return <AdminLayout />;
      default:
        return <Navigate to="/auth/login" />;
    }
  };

  return <LayoutComponent />;
};

export default RoleBasedLayout;
