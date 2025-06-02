import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import useUserStore from "@/zustand/UserStore";

// Import Layouts
import AuthLayout from "@/layouts/AuthLayout";
import ClientLayout from "@/layouts/ClientLayout";
import ProviderLayout from "@/layouts/ProviderLayout";
import AdminLayout from "@/layouts/AdminLayout";

// Import Auth Pages
import Login from "@/pages/AuthPages/Login";
import Register from "@/pages/AuthPages/Register";
import ForgotPassword from "@/pages/AuthPages/ForgotPassword";
import ResetPassword from "@/pages/AuthPages/ResetPassword";
import VerifyEmail from "@/pages/AuthPages/VerifyEmail";

// Import Client Pages
import ClientDashboard from "@/pages/ClientPages/ClientDashboard";
import BookAppointment from "@/pages/ClientPages/BookAppointment";
import AppointmentHistory from "@/pages/ClientPages/AppointmentHistory";
import ServiceList from "@/pages/ClientPages/ServiceList";

// Import Provider Pages
import ProviderDashboard from "@/pages/ProviderPages/ProviderDashboard";
import ManageAvailability from "@/pages/ProviderPages/ManageAvailability";
import ManageServices from "@/pages/ProviderPages/ManageServices";
import AppointmentDetails from "@/pages/ProviderPages/AppointmentDetails";

// Import Admin Pages
import AdminDashboard from "@/pages/AdminPages/AdminDashboard";
import ManageUsers from "@/pages/AdminPages/ManageUsers";
import AllAppointments from "@/pages/AdminPages/AllAppointments";
import NotFound from "@/pages/NotFound";

// Role-based Protected Route Components
const ClientProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);

  if (!user?.isVerified) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user.role !== "client") {
    // Redirect to their appropriate dashboard
    const redirectPath =
      user.role === "provider" ? "/provider/dashboard" : "/admin/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

const ProviderProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = useUserStore((state) => state.user);

  if (!user?.isVerified) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user.role !== "provider") {
    // Redirect to their appropriate dashboard
    const redirectPath =
      user.role === "client" ? "/dashboard" : "/admin/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);

  if (!user?.isVerified) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user.role !== "admin") {
    // Redirect to their appropriate dashboard
    const redirectPath =
      user.role === "client" ? "/dashboard" : "/provider/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Root redirect */}
      <Route path="/" element={<RootRedirect />} />

      {/* Public Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
      </Route>

      {/* Client Routes (no prefix) */}
      <Route
        path="/"
        element={
          <ClientProtectedRoute>
            <ClientLayout />
          </ClientProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="appointment-history" element={<AppointmentHistory />} />
        <Route path="service-list" element={<ServiceList />} />
      </Route>

      {/* Provider Routes */}
      <Route
        path="/provider"
        element={
          <ProviderProtectedRoute>
            <ProviderLayout />
          </ProviderProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ProviderDashboard />} />
        <Route path="manage-availability" element={<ManageAvailability />} />
        <Route path="manage-services" element={<ManageServices />} />
        <Route path="appointment-details" element={<AppointmentDetails />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="all-appointments" element={<AllAppointments />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Enhanced root redirect component
const RootRedirect = () => {
  const user = useUserStore((state) => state.user);

  if (!user?.isVerified) {
    return <Navigate to="/auth/login" replace />;
  }

  // Redirect to role-specific dashboard
  switch (user.role) {
    case "client":
      return <Navigate to="/dashboard" replace />;
    case "provider":
      return <Navigate to="/provider/dashboard" replace />;
    case "admin":
      return <Navigate to="/admin/dashboard" replace />;
    default:
      return <Navigate to="/auth/login" replace />;
  }
};

export default AppRoutes;
