import useUserStore from "@/zustand/UserStore";
import { useLocation, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  accessMode: "auth" | "public";
  redirectPath?: string;
}

const ProtectedRoute = ({
  children,
  accessMode,
  redirectPath = "/auth/login",
}: ProtectedRouteProps) => {
  const user = useUserStore((state) => state.user);
  const location = useLocation();

  const isAuthenticated = user?.isVerified;

  switch (accessMode) {
    case "auth":
      if (!isAuthenticated) {
        return (
          <Navigate
            to={redirectPath || "/auth/login"}
            state={{ from: location }}
            replace
          />
        );
      }
      break;
    case "public":
      if (isAuthenticated) {
        return (
          <Navigate
            to={redirectPath || "/dashboard"}
            state={{ from: location }}
            replace
          />
        );
      }
      break;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
