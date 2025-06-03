import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default ProviderLayout;
