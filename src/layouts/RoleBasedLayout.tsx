import useUserStore from "@/zustand/UserStore";
import ClientLayout from "@/layouts/ClientLayout";
import ProviderLayout from "@/layouts/ProviderLayout";
import AdminLayout from "@/layouts/AdminLayout";
import { Navigate } from "react-router-dom";

const RoleBasedLayout = () => {
  const user = useUserStore((state) => state.user);

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
