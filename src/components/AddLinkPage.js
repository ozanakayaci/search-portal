import React from "react";
import { useState } from "react";

import "./AddLinkPage.css";

//react router
import { Link, useNavigate } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../redux/dataSlice";

function AddLinkPage() {
  const dispatch = useDispatch();

  const regex = /[^1-9]/g;

  const data = useSelector((state) => state.data.data);
  const dataCols = useSelector((state) => state.data.cols);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  function handleChange(e, item) {
    if (
      item == "Name Surname" &&
      regex.test(e.target.value[e.target.value.length - 1])
    ) {
      setName(e.target.value);
    } else if (item == "Email") {
      setEmail(e.target.value);
    } else if (
      item == "Country" &&
      regex.test(e.target.value[e.target.value.length - 1])
    ) {
      setCountry(e.target.value);
    } else if (
      item == "City" &&
      regex.test(e.target.value[e.target.value.length - 1])
    ) {
      setCity(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateData([...data, [name, "", email, "", country, city]]));
    alert("New record added!");
    setName("");
    setEmail("");
    setCountry("");
    setCity("");
  }

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src="../../img/tesodev.jpeg" alt="" width="150" height="64" />
          </Link>
        </div>
        <div>
          <button className="nav-button" onClick={() => navigate(-1)}>
            ⬅ Return to List Page
          </button>
        </div>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit} className="form">
        {dataCols.map((item, i) => {
          if (item != "Company" && item != "Date") {
            return (
              <label key={i}>
                <div>{item}</div>
                <input
                  value={
                    item == "Name Surname"
                      ? name
                      : item == "Email"
                      ? email
                      : item == "Country"
                      ? country
                      : city
                  }
                  placeholder={
                    item == "Name Surname"
                      ? "Enter name and surname"
                      : item == "Email"
                      ? "Enter a email (abc@xyz.com)"
                      : item == "Country"
                      ? "Enter a country"
                      : "Enter a city"
                  }
                  onChange={(e) => {
                    handleChange(e, item);
                  }}
                  style={{ minWidth: "590px" }}
                  type={item == "Email" ? "email" : "text"}
                  name={`${item.toLowerCase()}`}
                  autoComplete="off"
                  required
                  maxlength={item == "Name Surname" ? "60" : "40"}
                  minlength={item == "Name Surname" ? "4" : "2"}
                />
              </label>
            );
          }
        })}
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddLinkPage;
