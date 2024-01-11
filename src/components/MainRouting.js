import FooterBar from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterBar />
    </>
  );
};

export default MainLayout;
