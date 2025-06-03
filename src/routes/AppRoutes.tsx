import { Routes, Route, useLocation } from "react-router-dom";

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
import BookAppointment from "@/pages/ClientPages/BookAppointment";
import AppointmentHistory from "@/pages/ClientPages/AppointmentHistory";
import ServiceList from "@/pages/ClientPages/ServiceList";

// Import Provider Pages
import ManageAvailability from "@/pages/ProviderPages/ManageAvailability";
import ManageServices from "@/pages/ProviderPages/ManageServices";
import AppointmentDetails from "@/pages/ProviderPages/AppointmentDetails";

// Import Admin Pages
import ManageUsers from "@/pages/AdminPages/ManageUsers";
import AllAppointments from "@/pages/AdminPages/AllAppointments";
import NotFound from "@/pages/NotFound";

// Import Route Components
import RootRedirect from "@/components/routes/RootRedirect";
import ProtectedRoute from "@/components/routes/ProtectedRoute";
import DashboardRedirect from "@/components/routes/DashboardRedirect";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Root redirect */}
      <Route path="/" element={<RootRedirect />} />

      {/* Public Auth Routes */}
      <Route
        path="/auth"
        element={
          <ProtectedRoute accessMode="public">
            <AuthLayout />
          </ProtectedRoute>
        }
      >
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
          <ProtectedRoute accessMode="auth">
            <ClientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashboardRedirect />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="appointment-history" element={<AppointmentHistory />} />
        <Route path="service-list" element={<ServiceList />} />
      </Route>

      {/* Provider Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute accessMode="auth">
            <ProviderLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashboardRedirect />} />
        <Route path="manage-availability" element={<ManageAvailability />} />
        <Route path="manage-services" element={<ManageServices />} />
        <Route path="appointment-details" element={<AppointmentDetails />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute accessMode="auth">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashboardRedirect />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="all-appointments" element={<AllAppointments />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
