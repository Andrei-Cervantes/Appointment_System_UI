import ThemeToggle from "@/components/toggle/ThemeToggle";
import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  const isLogin = location.pathname === "/auth/login";
  const isRegister = location.pathname === "/auth/register";
  const isForgotPassword = location.pathname === "/auth/forgot-password";
  const isResetPassword = location.pathname === "/auth/reset-password";
  const isEmailVerify = location.pathname === "/auth/email-verify";

  const getBackgroundColor = () => {
    if (isLogin) return "#ef4444"; // red-500
    if (isRegister) return "#3b82f6"; // blue-500
    if (isForgotPassword) return "#22c55e"; // green-500
    if (isResetPassword) return "#eab308"; // yellow-500
    if (isEmailVerify) return "#a855f7"; // purple-500
    return "#6b7280"; // gray-500
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-2 bg-background">
        <ThemeToggle className="float-right" />
      </header>
      <main className="flex-1 grid grid-cols-[1fr_1fr]">
        <div className="p-3">
          <div
            className="h-full rounded-lg"
            style={{ backgroundColor: getBackgroundColor() }}
          ></div>
        </div>
        <div className="p-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
