import UserItem from "../components/UserItem";

function SelectedUsers({ items, searchValue }) {
  return (
    <div className="main-container">
      <div className="main-container-layout">
        <div className="main-container-layout-selectedUsers">
          {/* <button>Delete all</button> */}
          <div className="main-container-layout-selectedUsers-container">
            <div className="main-container-layout-selectedUsers-container-users">

              {items
                .filter(item => item.login.toLowerCase().includes(searchValue.toLowerCase()))
                .map(obj =>
                  <UserItem
                    key={obj.id}
                    id={obj.id}
                    avatar_url={obj.avatar_url}
                    login={obj.login}
                  />
                )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedUsers;