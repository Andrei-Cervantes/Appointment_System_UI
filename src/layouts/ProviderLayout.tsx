import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
};

export default ProviderLayout;
