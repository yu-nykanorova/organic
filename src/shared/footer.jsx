import Logo from "../assets/logo.svg";
import Instagram from "../assets/img/footer/instagram.svg";
import Facebook from "../assets/img/footer/facebook.svg";
import Twitter from "../assets/img/footer/twitter.svg";
import Pinterest from "../assets/img/footer/pinterest.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact">
          <h6 className="footer-title footer-contact__title">Contact Us</h6>
          <div className="footer-contact__link">
            Email
            <a href="mailto:needhelp@Organia.com" target="_blank">
              needhelp@Organia.com
            </a>
          </div>
          <div className="footer-contact__link">
            Phone
            <a href="tel:666888888" target="_blank">
              666 888 888
            </a>
          </div>
          <div className="footer-contact__link">
            Address
            <a href="/" target="_blank">
              88 road, borklyn street, USA
            </a>
          </div>
        </div>
        <div className="footer-info">
          <a className="footer-info__logo" href="/">
            <img src={Logo} alt="logo" />
            <span>Organick</span>
          </a>
          <p className="footer-info__desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printin
          </p>
          <div className="footer-info__social">
            <a href="/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="/">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="/">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="/">
              <img src={Pinterest} alt="Pinterest" />
            </a>
          </div>
        </div>
        <div className="footer-pages">
          <h6 className="footer-title footer-pages__title">Utility Pages</h6>
          <Link className="footer-pages__link" to="/style-guide">
            Style Guide
          </Link>
          <Link className="footer-pages__link" to="*">
            404 Not Found
          </Link>
          <Link className="footer-pages__link" to="/password-protected">
            Password Protected
          </Link>
          <Link className="footer-pages__link" to="/licences">
            Licences
          </Link>
          <Link className="footer-pages__link" to="/changelog">
            Changelog
          </Link>
        </div>
      </footer>
      <p className="footer__copyright">
        Copyright &#169; <span>Organick</span>
      </p>
    </>
  );
};
