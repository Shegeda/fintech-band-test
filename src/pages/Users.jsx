import React from "react";
import UserItem from "../components/UserItem";

function Users({ usersItem, onAddToSelectedUsers, searchValue }) {
  // console.log(searchValue)
  return (
    // <main>
    <div className="main-container">
      <div className="main-container-layout">
        <div className="main-container-left-side">

          {usersItem
            .filter(item => item.login.toLowerCase().includes(searchValue.toLowerCase()))
            // .filter(item => item.id.includes(searchValue))
            .map(item =>
              <UserItem
                key={item.id}
                id={item.id}
                avatar_url={item.avatar_url}
                login={item.login}
                onSelected={obj => onAddToSelectedUsers(obj)}
              />
            )}

        </div>

        <div className="main-container-information-box">
          {/* <p>Тут должна отобразится информация пользователя при клике на него</p> */}
        </div>
      </div>
    </div>
    // </main>
  )
}

export default Users;