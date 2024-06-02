import { Outlet } from "react-router-dom";
import HeaderAs from "./Component/HeaderAs/HeaderAs";
import SideBar from "./Component/SideBar/SideBar";
import "./App.css";

function App() {
  return (
    <div className="staffLayout">
      <HeaderAs />
      <div className="staffbody">
        <div className="sidebar"><SideBar/></div>
        <div className="outlet"><Outlet/></div>
      </div>
    </div>
  );
}

export default App;

