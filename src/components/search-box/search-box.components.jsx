import { Component } from "react";

import "./search-box.components.jsx";
import "./search-box.style.css";

const SearchBox = ({ className, placeholder, onSearchHandler }) => (
  <input
    className={`search-box ${className}`}
    type="Serach"
    placeholder={placeholder}
    onChange={onSearchHandler}
  />
);

export default SearchBox;
