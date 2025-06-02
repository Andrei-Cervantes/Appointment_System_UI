import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      <h1>Client Layout</h1>
      <Outlet />
    </>
  );
};

export default ClientLayout;
