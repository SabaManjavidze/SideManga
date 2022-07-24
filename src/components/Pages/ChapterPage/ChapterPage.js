import axios from "axios";
import { first } from "lodash";
import React, { useState, useEffect } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { main_url } from "../../Variables";
import ChapterNav from "./ChapterNav/ChapterNav";
import "./ChapterPage.css";

function ChapterPage() {
  const [pages, setPages] = useState([]);
  // const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);
  const { mangaId, chap } = useParams();
  const {
    state: { chapterIndex, chapters, details },
  } = useLocation();
  const [chapIdx, setChapIdx] = useState(chapterIndex);

  const fetchData = async () => {
    const url = `${main_url}/manga/${mangaId}/${chapters[chapIdx].chap_num}`;
    const { data } = await axios.get(url);
    setPages(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [chapIdx]);

  return (
    <div className="chap-cont" style={{ height: loading ? "100vh" : "auto" }}>
      <div className="chap-header">
        <h1>{loading ? "loading..." : details.title}</h1>
        <h2>
          {loading
            ? "loading..."
            : chapIdx !== undefined && chapters[chapIdx].chap_title}
        </h2>
      </div>

      {loading ? null : (
        <ChapterNav
          setChapIdx={setChapIdx}
          chapters={chapters}
          chapIdx={chapIdx}
        />
      )}

      <div className="pages-cont">
        <div className="pages">
          {loading
            ? null
            : pages.map((child) => {
                return <img key={child.src} src={child.src} />;
              })}
        </div>
      </div>
      {loading ? null : (
        <ChapterNav
          // man_url={url}
          // setUrl={setUrl}
          // nextChap={nextChap}
          // prevChap={prevChap}
          chapters={chapters}
          chapIdx={chapIdx}
          setChapIdx={setChapIdx}
        />
      )}
    </div>
  );
}

export default ChapterPage;
