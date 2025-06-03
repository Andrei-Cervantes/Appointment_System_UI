import { Navigate } from "react-router-dom";
import useUserStore from "@/zustand/UserStore";

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

export default RootRedirect;
