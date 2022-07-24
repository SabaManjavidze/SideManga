import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavBar.css";
import SearchResult from "../searchResults/searchResult";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { main_url } from "../Variables";
import { debounce } from "lodash";

export default function NavBar({ setUrl }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const fetchResults = async (value) => {
    const { data } = await axios.get(`${main_url}/search/${value}`);
    setData(data);
    setLoading(false);
  };
  // useEffect(() => {
  // }, [value]);
  const debounceFn = useCallback(debounce(fetchResults, 500), []);
  const onChangeText = (text) => {
    setValue(text);
    text == "" ? setData([]) : debounceFn(text);
  };
  return (
    <div className="topnav">
      <div className="nav-btns">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/OAuth">LogIn</NavLink>
        <a href="#contact">Contact</a>
      </div>
      <div className="search-container">
        <input
          value={value}
          type="text"
          className="search-inp"
          onChange={(e) => {
            onChangeText(e.target.value);
          }}
          placeholder="Search.."
        />
        <ul className="results-cont">
          {loading
            ? null
            : data.map((child) => {
                return (
                  <SearchResult
                    setData={setData}
                    setValue={setValue}
                    item={child}
                  />
                );
              })}
        </ul>
      </div>
    </div>
  );
}
