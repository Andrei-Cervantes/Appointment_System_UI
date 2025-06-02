import { Routes, Route, Navigate } from "react-router-dom";

// Import Layouts
import AuthLayout from "@/layouts/AuthLayout";

// Import Components
import ProtectedRoute from "@/routes/components/ProtectedRoute";
import Dashboard from "@/routes/components/Dashboard";
import RoleBasedLayout from "@/layouts/RoleBasedLayout";

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

const AppRoutes = () => {
  return (
    <Routes>
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

      {/* Protected Routes with Role-based Layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <RoleBasedLayout />
          </ProtectedRoute>
        }
      >
        {/* Unified Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Client-specific routes */}
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="appointment-history" element={<AppointmentHistory />} />
        <Route path="service-list" element={<ServiceList />} />

        {/* Provider-specific routes */}
        <Route path="manage-availability" element={<ManageAvailability />} />
        <Route path="manage-services" element={<ManageServices />} />
        <Route path="appointment-details" element={<AppointmentDetails />} />

        {/* Admin-specific routes */}
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="all-appointments" element={<AllAppointments />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Simple root redirect component
const RootRedirect = () => {
  return <Navigate to="/dashboard" replace />;
};

export default AppRoutes;
