import { Outlet } from "react-router-dom";
import HeaderAs from "./Component/Header/HeaderAs";
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
