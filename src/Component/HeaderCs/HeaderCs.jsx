import "./HeaderCs.css";
import logo from "../../assets/logodas.png";
import exit from "../../assets/exit.png";
function HeaderCs() {
  return (
    <div className="header">
      <img src={logo} className="image1" />
      <h3 className="text-3xl font-bold font-mono"> Consulting Staff </h3>
      <img src={exit} className="image2" />
    </div>
  );
}

export default HeaderCs;
