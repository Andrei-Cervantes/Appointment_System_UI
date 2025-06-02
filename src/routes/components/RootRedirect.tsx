import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/zustand/UserStore";

const RootRedirect = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user?.isVerified) {
      // No user or not verified, go to login
      navigate("/auth/login", { replace: true });
    } else {
      // User is verified, redirect to their dashboard
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  // Show loading while redirecting
  return <div>Loading...</div>;
};

export default RootRedirect;
