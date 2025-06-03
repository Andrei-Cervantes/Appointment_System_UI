import useUserStore from "@/zustand/UserStore";

// Import Dashboard Pages
import ClientDashboard from "@/pages/ClientPages/ClientDashboard";
import ProviderDashboard from "@/pages/ProviderPages/ProviderDashboard";
import AdminDashboard from "@/pages/AdminPages/AdminDashboard";

const DashboardRedirect = () => {
  const user = useUserStore((state) => state.user);

  if (user?.role === "client") {
    return <ClientDashboard />;
  } else if (user?.role === "provider") {
    return <ProviderDashboard />;
  } else if (user?.role === "admin") {
    return <AdminDashboard />;
  }
};

export default DashboardRedirect;
