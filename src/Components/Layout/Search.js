import React, { useState } from "react";
import "./Search.css";
import { SearchIcon } from "../Navbaar/Icons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <form className="search-barr" onSubmit={searchHandler}>
        <input
          className="search-holder"
          type="text"
          placeholder="Enter product name..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="search-btnn">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
