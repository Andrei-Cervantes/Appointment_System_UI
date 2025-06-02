import useUserStore from "@/zustand/UserStore";
import ClientDashboard from "@/pages/ClientPages/ClientDashboard";
import ProviderDashboard from "@/pages/ProviderPages/ProviderDashboard";
import AdminDashboard from "@/pages/AdminPages/AdminDashboard";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);

  switch (user?.role) {
    case "client":
      return <ClientDashboard />;
    case "provider":
      return <ProviderDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <Navigate to="/login" />;
  }
};

export default Dashboard;
