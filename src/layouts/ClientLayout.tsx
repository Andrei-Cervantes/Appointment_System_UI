import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
};

export default ClientLayout;
