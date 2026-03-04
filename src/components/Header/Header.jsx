import wtwrLogo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <div className="header__col-1">
        <Link to="/">
          <img className="header__logo" src={wtwrLogo} alt="WTWR Logo." />
        </Link>
        <p>
          {currentDate}, {weatherData.city}
        </p>
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
    </div>
  );
}

export default Header;
