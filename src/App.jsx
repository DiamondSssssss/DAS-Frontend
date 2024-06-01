import { Outlet } from "react-router-dom";
import HeaderAs from "./Component/HeaderAs/HeaderAs";
import SideBar from "./Component/SideBar/SideBar";

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
