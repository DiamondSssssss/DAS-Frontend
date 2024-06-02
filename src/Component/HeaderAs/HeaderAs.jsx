import "./HeaderAs.css";
import logo from "../../assets/logodas.png";
import exit from "../../assets/exit.png";
function HeaderAs() {
  return (
    <div className="header">
      <img src={logo} className="image1" />
      <h3> Assessment Staff </h3>
      <img src={exit} className="image2" />
    </div>
  );
}

export default HeaderAs;
