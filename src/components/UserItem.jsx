import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';


function UserItem({avatar_url, login, onSelected }) {
  const [isSelected, setIsSelected] = useState(false);

  const onClickHeart = () => {
    onSelected({avatar_url, login});
    setIsSelected(!isSelected);
  }


  return (
    <div className="user-item">
      <div className="user-item-section">
        <Avatar className="user-item-avatar" alt="User" src={avatar_url} sx={{ width: 55, height: 55 }} />
        <p className="user-item-login">{login}</p>
      </div>
      <img
        onClick={onClickHeart}
        className="icon-inactive"
        src={isSelected ? "/img/heart-active.png" : "/img/heart-inactive.png"}
        alt="Heart-inactive" />
    </div>
  )
}

export default UserItem;