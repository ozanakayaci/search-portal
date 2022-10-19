import React from "react";
import { useState, useEffect } from "react";

import "./SearchBar.css";

import { Link, useLocation } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

function SearchBar({ word }) {
  let location = useLocation();

  const datas = useSelector((state) => state.data.data);

  const [searchedWord, setSearchedWord] = useState("");

  let dataSearch = datas.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchedWord.toString().toLowerCase())
    );
  });

  useEffect(() => {
    location.pathname === "/" ? setSearchedWord("") : setSearchedWord(word);
  }, []);

  let handleChange = (e) => {
    setSearchedWord(e.target.value);
  };

  return (
    <div
      style={
        searchedWord == "" && location.pathname === "/"
          ? { margin: "100px 0" }
          : location.pathname === "/"
          ? { marginTop: "100px" }
          : {}
      }
    >
      {location.pathname === "/" ? (
        <div className="title">
          <h1>Find in Records</h1>
        </div>
      ) : null}
      <div>
        <input
          value={searchedWord}
          onChange={handleChange}
          className="main-search"
          type="text"
        />
        <Link className="button" to={`/listpage/${searchedWord}`}>
          Search
        </Link>
      </div>
      {location.pathname === "/" &&
      searchedWord != "" &&
      dataSearch.length > 0 ? (
        <div className="quick-results">
          <div>
            {dataSearch.map((item, i) => {
              if (i < 3) {
                return (
                  <div key={i}>
                    {i != 0 && <hr className="line" />}
                    <div className="left-side">
                      <div className="card-country">
                        {item[4] != "" ? item[4] : item[0]}
                      </div>
                      <div className="card-city">
                        {item[5] != "" ? item[5] : item[2]}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <Link className="show-more" to={`/listpage/${searchedWord}`}>
            Show more...
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
