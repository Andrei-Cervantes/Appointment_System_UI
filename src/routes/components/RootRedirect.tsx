import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/zustand/UserStore";

// Import icons
import { Loader } from "lucide-react";

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
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default RootRedirect;
