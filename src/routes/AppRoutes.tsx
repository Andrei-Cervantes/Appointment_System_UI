import { Routes, Route } from "react-router-dom";

// Import Layouts
import ClientLayout from "@/layouts/ClientLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminLayout from "@/layouts/AdminLayout";
import ProviderLayout from "@/layouts/ProviderLayout";

// Import Components
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/components/Dashboard";

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

// Import Not Found Page
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>

      {/* Client Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles="client">
            <ClientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/appointment-history" element={<AppointmentHistory />} />
        <Route path="/service-list" element={<ServiceList />} />
      </Route>

      {/* Provider Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles="provider">
            <ProviderLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-availability" element={<ManageAvailability />} />
        <Route path="/manage-services" element={<ManageServices />} />
        <Route path="/appointment-details" element={<AppointmentDetails />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/all-appointments" element={<AllAppointments />} />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
