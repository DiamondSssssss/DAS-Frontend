import "./HeaderAs.css";
import logo from "../../assets/logodas.png";
import exit from "../../assets/exit.png";
function HeaderAs() {
  return (
    <header>
      <img src={logo} className="image1" />
      <h3> Staff </h3>
      <img src={exit} className="image2" />
    </header>
  );
}

export default HeaderAs;
