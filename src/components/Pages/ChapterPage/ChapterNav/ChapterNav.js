import React, { useEffect } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ChapterNav.css";

export default function ChapterNav({ chapIdx, setChapIdx, chapters }) {
  // const location = useLocation();
  const history = useHistory();
  const handleClick = (idx) => {
    if (idx < chapters.length && idx >= 0) {
      setChapIdx(idx);
    } else {
      //   history.push({ pathname: `/Manga/${mangaId}` });
      history.goBack();
    }
  };
  return (
    <div className="chapter-nav-cont">
      <button onClick={() => handleClick(chapIdx + 1)} className="nav-btn prev">
        <p style={{ color: "white", margin: 0 }}>prev chapter</p>
      </button>
      <button onClick={() => handleClick(chapIdx - 1)} className="nav-btn prev">
        <p style={{ color: "white", margin: 0 }}>next chapter</p>
      </button>
    </div>
  );
}
