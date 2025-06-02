import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
  return (
    <>
      <h1>Provider Layout</h1>
      <Outlet />
    </>
  );
};

export default ProviderLayout;
