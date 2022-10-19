import React from "react";
import { useState } from "react";

import "./ListPage.css";

//react router
import { Link, useParams } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import SearchBar from "./SearchBar.js";

function ListPage() {
  let { word } = useParams();

  const datas = useSelector((state) => state.data.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  let dataSearch = datas.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(word.toString().toLowerCase())
    );
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentDataSearch = dataSearch.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(dataSearch.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="list-nav">
        <div className="logo">
          <Link to="/">
            <img src="../../img/tesodev.jpeg" alt="" width="150" height="64" />
          </Link>
        </div>
        <div className="search-bar">
          <SearchBar word={word} />
        </div>
        <div className="add-button">
          <Link className="button" to="/addlink">
            Add new record
          </Link>
        </div>
      </div>
      <div className="results">
        {currentDataSearch.map((item, key) => {
          return (
            <div key={key}>
              {key != 0 && <hr className="line" />}
              <div key={key} className="card">
                <div className="left-side">
                  <div className="card-country">{item[4]}</div>
                  <div className="card-city">{item[5]}</div>
                </div>
                <div className="right-side">
                  <div className="card-name">{item[0]}</div>
                  <div className="card-date">
                    {item[3] == "" ? item[2] : item[3]}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="pagination">
          <Link
            onClick={() =>
              setCurrentPage(
                currentPage - 1 > 0 ? currentPage - 1 : currentPage
              )
            }
          >
            Previous
          </Link>
          {pageNumbers.map((number, i) => {
            if (
              (number < currentPage + 2 && number > currentPage - 2) ||
              number > pageNumbers.length - 3 ||
              number < 4
            ) {
              return (
                <Link
                  key={i}
                  onClick={() => setCurrentPage(number)}
                  href=""
                  className={currentPage == number ? "active" : ""}
                >
                  {number}
                </Link>
              );
            } else if (pageNumbers.length > 6 && number == currentPage + 3) {
              return <span className="ellipsis">...</span>;
            } else {
              return (
                <Link
                  hidden
                  key={i}
                  onClick={() => setCurrentPage(number)}
                  href=""
                  className={currentPage == number ? "active" : ""}
                >
                  {number}
                </Link>
              );
            }
          })}
          <Link
            onClick={() =>
              setCurrentPage(
                currentPage + 1 < pageNumbers.length + 1
                  ? currentPage + 1
                  : currentPage
              )
            }
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
