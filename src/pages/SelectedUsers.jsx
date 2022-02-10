import UserItem from "../components/UserItem";

function SelectedUsers({ items, searchValue, onAddToSelectedUsers, onDelete }) {

  return (
    <div className="main-container">
      <div className="main-container-layout">
        <div className="main-container-layout-selectedUsers">

          <div className="main-container-layout-selectedUsers-container">
            {
              items.length > 0 ? <div className="main-container-layout-selectedUsers-container-users">
                {/* <button>Delete all</button> */}

                {items
                  .filter(item => item.login.toLowerCase().includes(searchValue.toLowerCase()))
                  .map(item =>
                    <UserItem
                      key={item.id}
                      id={item.id}
                      avatar_url={item.avatar_url}
                      login={item.login}
                      itemSelected={true}
                      onSelected={obj => onAddToSelectedUsers(obj)}
                      {...item}
                    />
                  )}

              </div> : (
                <div>
                  <img className="sad-emoji" width={70} height={70} src="/img/sad-emoji.png" alt="Sad-emoji" />
                  <div className="users-not-selected">Users not selected...</div>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedUsers;