import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import SelectedUsers from "./pages/SelectedUsers";


function App() {
  const [usersItem, setUsersItem] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectItems, setSelectItems] = useState([
    // { 
    //   avatar_url: "/img/avatar-1.png", 
    //   login: "mojombo"
    // },
    // { 
    //   avatar_url: "/img/avatar-2.jpg", 
    //   login: "defunkt"
    // }

  ]);

  useEffect(() => {
    axios.get('https://api.github.com/users').then(res => {
      setUsersItem(res.data)
    })
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onAddToSelectedUsers = (obj) => {
    setSelectItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    console.log(id)
  }

  return (
    <div className="wrapper">

      <Header
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
      />

      <main>
        <Sidebar />

        <Routes>
          <Route path="/" element={
            <Users
              usersItem={usersItem}
              onAddToSelectedUsers={onAddToSelectedUsers}
              searchValue={searchValue}
            />
          } />
          <Route path="/selected-users" element={
            <SelectedUsers
              items={selectItems}
              searchValue={searchValue}
              onRemoveItem={onRemoveItem}
            />
          } />
        </Routes>

      </main>
      <Footer />

    </div>
  );
}

export default App;