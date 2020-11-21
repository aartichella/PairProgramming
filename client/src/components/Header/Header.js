import "./Header.scss";
import farmIcon from "../../assets/icons8-farm-64.png";
import tractor from "../../assets/icons8-tractor-64.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__container">
          <div className="nav__wrapper">
            <li className="nav__list-item">SHOP</li>
            <li className="nav__list-item">CONTACT</li>
            <li className="nav__list-item">ABOUT</li>
          </div>
          <Link to="/">
            <img src={farmIcon} alt="farm house" className="link" />
          </Link>
          <div className="nav__wrapper">
            <Link className="link" to="/upload">
              <li className="nav__list-item">LOG IN</li>
            </Link>
            <img className="tractor" src={tractor} alt="tractor" />
            <li className="nav__list-item">CART</li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
