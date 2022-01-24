import React from "react";

function Header({ onChangeSearchInput, searchValue }) {
  return (
    <header>
      <a className="header-logo-link" href="/" title="Home page">
        <div className="header-logo"><span className="header-logo-monobank">monobank</span> | <span className="header-logo-universalbank">Universal Bank</span></div>
      </a>
      <div className="search-block">
        <img width={20} height={20} src="/img/search.svg" alt="Search" />
        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search..." />
      </div>
    </header>
  )
}

export default Header;