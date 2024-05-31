import { Outlet } from "react-router-dom";
import Content from "./Component/AssessmentBooking";
import HeaderAs from "./Component/HeaderAs";
import SideBar from "./Component/SideBar";

function App() {
  return (
    <>
      <HeaderAs />
      <SideBar />
      <Outlet/>
    </>
  );
}

export default App;
