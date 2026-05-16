import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar({ handleSignOut, handleEditClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar}
          alt="User Avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__btns">
        <button
          className="sidebar__edit-profile-btn"
          type="button"
          onClick={handleEditClick}
        >
          Edit profile
        </button>
        <button
          className="sidebar__logout-btn"
          type="button"
          onClick={handleSignOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
