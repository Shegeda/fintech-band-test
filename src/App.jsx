import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import SelectedUsers from "./pages/SelectedUsers";
import AppContext from "./context";


function App() {
  const [usersItem, setUsersItem] = useState([]);
  const [selectItems, setSelectItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // const [statusSidebar, setStatusSidebar] = useState(false);


  useEffect(() => {
    async function fetchData() {
      // setIsLoading(true);
      const selectItemsResponse = await axios.get('https://61f306f32219930017f509fd.mockapi.io/fintech-band-test/selected-users')
      const usersResponse = await axios.get('https://api.github.com/users')

      setIsLoading(false);

      setSelectItems(selectItemsResponse.data)
      setUsersItem(usersResponse.data)
    }
    fetchData()
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onAddToSelectedUsers = async (obj) => {
    try {
      if (selectItems.find(item => Number(item.id) === Number(obj.id))) {
        await axios.delete(`https://61f306f32219930017f509fd.mockapi.io/fintech-band-test/selected-users/${obj.id}`)
        setSelectItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://61f306f32219930017f509fd.mockapi.io/fintech-band-test/selected-users', obj)
        setSelectItems(prev => [...prev, data])
      }
    } catch (error) {
      alert('Error when adding to selected users')
      console.log(error)
    }
  }

  const isItemSelected = (id) => {
    return selectItems.some(obj => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{ isItemSelected }}>
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
                selectItems={selectItems}
                isLoading={isLoading}
              />
            } />
            <Route path="/selected-users" element={
              <SelectedUsers
                items={selectItems}
                searchValue={searchValue}
                onAddToSelectedUsers={onAddToSelectedUsers}
              />
            } />
          </Routes>

        </main>
        <Footer />

      </div>
    </AppContext.Provider>
  );
}

export default App;