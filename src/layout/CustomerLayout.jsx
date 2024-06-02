import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import "./CustomerLayout.css";

function CustomerLayout() {
  return (
    <div className="customerlayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default CustomerLayout;
