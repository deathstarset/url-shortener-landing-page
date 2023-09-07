import logo from "../images/logo-white.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import "../styles/footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="links">
          <ul>
            <li>Features</li>
            <li>
              <a href="">Link Shortening</a>
            </li>
            <li>
              <a href="">Branded Links</a>
            </li>
            <li>
              <a href="">Analytics</a>
            </li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
          <ul>
            <li>Company</li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Our Team</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </ul>
        <div className="socials">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pintrest} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
}
