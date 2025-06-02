import { Routes, Route } from "react-router-dom";

// Import Layouts
import ClientLayout from "../layouts/ClientLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProviderLayout from "../layouts/ProviderLayout";

// Import Components
import ProtectedRoute from "../components/ProtectedRoute";

// Import Auth Pages
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import ForgotPassword from "../pages/AuthPages/ForgotPassword";
import ResetPassword from "../pages/AuthPages/ResetPassword";
import VerifyEmail from "../pages/AuthPages/VerifyEmail";

// Import Client Pages
import ClientDashboard from "../pages/ClientPages/ClientDashboard";
import BookAppointment from "../pages/ClientPages/BookAppointment";
import AppointmentHistory from "../pages/ClientPages/AppointmentHistory";
import ServiceList from "../pages/ClientPages/ServiceList";

// Import Provider Pages
import ProviderDashboard from "../pages/ProviderPages/ProviderDashboard";
import ManageAvailability from "../pages/ProviderPages/ManageAvailability";
import ManageServices from "../pages/ProviderPages/ManageServices";
import AppointmentDetails from "../pages/ProviderPages/AppointmentDetails";

// Import Admin Pages
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import ManageUsers from "../pages/AdminPages/ManageUsers";
import AllAppointments from "../pages/AdminPages/AllAppointments";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Client Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ClientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/appointment-history" element={<AppointmentHistory />} />
        <Route path="/service-list" element={<ServiceList />} />
      </Route>

      {/* Provider Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ProviderLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route
          path="/provider/manage-availability"
          element={<ManageAvailability />}
        />
        <Route path="/provider/manage-services" element={<ManageServices />} />
        <Route
          path="/provider/appointment-details"
          element={<AppointmentDetails />}
        />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/all-appointments" element={<AllAppointments />} />
      </Route>

      {/* Public Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AuthLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
