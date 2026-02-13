import wtwrLogo from "../../assets/Logo.svg";
import "./Header.css";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <div className="header__col-1">
        <img className="header__logo" src={wtwrLogo} alt="WTWR Logo." />
        <p>
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__col-2">
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <p>Terrence Tegegne</p>
        <img className="header__profile" src="#" alt="Profile Image" />
      </div>
    </div>
  );
}

export default Header;
