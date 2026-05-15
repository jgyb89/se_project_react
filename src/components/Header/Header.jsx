import { useState, useContext } from "react"; // Import useContext
import wtwrLogo from "../../assets/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext"; // Import context
import { Link } from "react-router-dom";
import "./Header.css";

function Header({
  handleAddClick,
  handleLoginClick,
  handleRegisterClick,
  weatherData,
  isLoggedIn,
}) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { currentUser } = useContext(CurrentUserContext); // Access Current User

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const toggleMobileMenu = () => setIsMobileMenuOpened(!isMobileMenuOpened);

  // Fallback avatar with first letter if image is missing
  const renderAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          className="header__profile"
          src={currentUser.avatar}
          alt="Profile Image"
        />
      );
    }
    return (
      <div className="header__avatar-placeholder">
        {currentUser?.name?.charAt(0).toUpperCase()}
      </div>
    );
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
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__profile-link">
              <p className="header__username">{currentUser?.name}</p>
              {renderAvatar()}
            </Link>
          </>
        ) : (
          <>
            <button onClick={handleRegisterClick} className="header__auth-btn">
              Sign Up
            </button>
            <button onClick={handleLoginClick} className="header__auth-btn">
              Log In
            </button>
          </>
        )}
      </div>

      {/* (Mobile menu would also need similar conditional rendering logic) */}
    </div>
  );
}

export default Header;
