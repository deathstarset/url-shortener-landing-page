import { useState } from "react";
import logo from "../images/logo.svg";
import "../styles/header.css";
function Header() {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <div className="header">
      <div className="container header-container">
        <img src={logo} alt="" />
        <div className={`navigation ${navOpened && "appear"}`}>
          <ul>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          </ul>
          <div className="buttons">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
        <ion-icon
          name="menu-outline"
          onClick={() => (navOpened ? setNavOpened(false) : setNavOpened(true))}
        ></ion-icon>
      </div>
    </div>
  );
}
export default Header;
