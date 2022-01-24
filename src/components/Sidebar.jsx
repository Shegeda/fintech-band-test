import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
  const [isUsersActive, setIsUsersActive] = useState(true);
  const [isSelectedUsersActive, setIsSelectedUsersActive] = useState(false);

  // Знаю, что можно проще прописать... + добавить local storage
  const onClickUsers = () => {
    if (isUsersActive) {
      setIsUsersActive(isUsersActive);
      setIsSelectedUsersActive(isSelectedUsersActive);
    } else {
      setIsUsersActive(!isUsersActive);
      setIsSelectedUsersActive(!isSelectedUsersActive);
    }
  }

  const onClickSelectedUsers = () => {
    if (!isSelectedUsersActive) {
      setIsUsersActive(!isUsersActive);
      setIsSelectedUsersActive(!isSelectedUsersActive);
    } 
  }

  return (
    // <main>
    <div className="sidebar">
      <div className="sidebar-block">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="users-component" onClick={onClickUsers}>
            <img
              src={isUsersActive ? "/img/users-active.png" : "/img/users-inactive.png"}
              alt="Users-active" />
            <p className={isUsersActive ? "users-active" : "users-inactive"}>Users</p>
          </div>
        </Link>
        <Link to="/selected-users" style={{ textDecoration: 'none' }}>
          <div className="selected-users-component" onClick={onClickSelectedUsers}>
            <img
              className="icon-users-inactivee"
              src={isSelectedUsersActive ? "/img/selected-users-active.png" : "/img/selected-users-inactive.png"}
              alt="Selected-users-inactive" />
            <p className={isSelectedUsersActive ? "selected-users" : "selected-users-inactive"}>Selected users</p>
          </div>
        </Link>
      </div>
    </div>
    // </main>
  )
}

export default Sidebar;