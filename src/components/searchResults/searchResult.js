import React from "react";
import { Link } from "react-router-dom";
import { domain, img_url } from "../Variables";
import "./searchResult.css";
export default function SearchResult({ item, setData, setValue }) {
  console.log(item);
  const handleClick = () => {
    setData([]);
    setValue("");
  };
  return (
    <Link
      to={`/Manga/${item.manga_id}`}
      onClick={handleClick}
      className="search-res-cont"
    >
      <img src={item.img_url} alt="" className="res-img" />
      <div className="title-container">
        <h3 className="res-title">{item.title}</h3>
      </div>
    </Link>
  );
}
