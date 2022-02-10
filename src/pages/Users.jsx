import React from "react";
import UserItem from "../components/UserItem";

function Users({ usersItem, onAddToSelectedUsers, searchValue, selectItems, isLoading }) {

  const renderItems = () => {
    const filteredItems = usersItem.slice(0, 5).filter(item =>
      item.login.toLowerCase().includes(searchValue.toLowerCase()))
      // .filter(item => item.id.includes(searchValue))

    return (
      (isLoading ? [...Array(5)] : filteredItems)
        .slice(0, 5)
        .map((item, title) =>
          <UserItem
            key={title}
            // id={item.id}
            // avatar_url={item.avatar_url}
            // login={item.login}
            // itemSelected={selectItems.some(obj => Number(obj.id) === Number(item.id))}
            onSelected={obj => onAddToSelectedUsers(obj)}
            loading={isLoading}
            {...item}
          />
        ))
  }

  return (
    // <main>
    <div className="main-container">
      <div className="main-container-layout">
        <div className="main-container-left-side">

          {renderItems()}

        </div>

        <div className="main-container-information-box" title="Тут должна отображаться информация пользователя при клике на него">
          {/* <p>Тут должна отобразится информация пользователя при клике на него</p> */}
        </div>
      </div>
    </div>
    // </main>
  )
}

export default Users;