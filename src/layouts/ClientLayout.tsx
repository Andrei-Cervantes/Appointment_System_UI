import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default ClientLayout;
