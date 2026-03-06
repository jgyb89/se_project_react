import { useState } from "react";
import wtwrLogo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ handleAddClick, weatherData }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Toggles the mobile menu open/closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  // Handles closing the mobile menu
  const handleMobileAddClick = () => {
    toggleMobileMenu();
    handleAddClick();
  };

  return (
    <div className="header">
      <div className="header__col-menu">
        <div className="header__col-1">
          <Link to="/">
            <img className="header__logo" src={wtwrLogo} alt="WTWR Logo" />
          </Link>
          <p>
            {currentDate}, {weatherData.city}
          </p>
        </div>
        <button className="header__hamburger-btn" onClick={toggleMobileMenu}>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>

      <div className="header__col-2">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
        <Link to="/profile" className="header__profile-link">
          <p className="header__username">Terrence Tegegne</p>
          <img className="header__profile" src={avatar} alt="Profile Image" />
        </Link>
      </div>

      <div
        className={`header__menu-overlay ${isMobileMenuOpened ? "header__menu-overlay_opened" : ""}`}
      >
        <div className="header__menu-content">
          <button className="header__menu-close" onClick={toggleMobileMenu}>
            ✕
          </button>
          <Link
            to="/profile"
            className="header__profile-link"
            onClick={toggleMobileMenu}
          >
            <p className="header__username">Terrence Tegegne</p>
            <img className="header__profile" src={avatar} alt="Profile Image" />
          </Link>
          <button
            onClick={handleMobileAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}

export default Header;
