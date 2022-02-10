import React, {useState} from 'react';
import ContentLoader from "react-content-loader"
import Avatar from '@mui/material/Avatar';
import AppContext from '../context';


function UserItem({ id, avatar_url, login, onSelected, itemSelected = false, loading = false }) {
  const [isSelected, setIsSelected] = useState(itemSelected);
  const { isItemSelected } = React.useContext(AppContext);

  const onClickHeart = () => {
    onSelected({ id, parentId: id, avatar_url, login });
    setIsSelected(!isSelected);
  }

  return (
    <div className="user-item">
      <div className="user-item-section">
        {
          loading ?
            <ContentLoader
              speed={2}
              width={265}
              height={65}
              viewBox="0 0 265 65"
              backgroundColor="#dfcee9"
              foregroundColor="#bd8ddd"
            >
              <circle cx="60" cy="33" r="27" />
              <rect x="127" y="24" rx="0" ry="0" width="100" height="20" />
            </ContentLoader>
            :
            <>
              <Avatar className="user-item-avatar" alt="User" src={avatar_url} sx={{ width: 55, height: 55 }} />
              <p className="user-item-login">{login}</p>
            </>
        }
      </div>
      <img
        onClick={onClickHeart}
        className="icon-inactive"
        src={isItemSelected(id) || isSelected ? "/img/heart-active.png" : "/img/heart-inactive.png"}
        alt="Heart-inactive" />
    </div>
  )
}

export default UserItem;