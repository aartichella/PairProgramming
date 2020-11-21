import "./Footer.scss";
import tractor2 from "../../assets/tracot.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <img src={tractor2} alt="" />
        <h1 className="footer-header">POWERED BY: A + O</h1>
      </div>
    </footer>
  );
}

export default Footer;
