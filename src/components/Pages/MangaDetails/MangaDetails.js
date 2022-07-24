import "./MangaDetails.css";
import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { domain, img_url, main_url } from "../../Variables";

export default function MangaDetails() {
  const { mangaId } = useParams();
  const [{ chapters, details }, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url } = useRouteMatch();
  const history = useHistory();
  const fetchData = async () => {
    const { data } = await axios.get(`${main_url}/manga/${mangaId}`);
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="manga-details-cont"
      style={{ height: loading ? "100vh" : "auto" }}
    >
      <div className="header-cont">
        <h1 style={{ color: "white", fontSize: 25, textAlign: "center" }}>
          {loading ? "loading..." : details.title}
        </h1>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img src={`${domain}${img_url}${mangaId}.jpg`} alt="" />
        </div>
      </div>
      <ul className="chapters-cont">
        {loading
          ? null
          : chapters.map((child, i) => {
              return (
                <li
                  className="chap-li"
                  style={{ listStyleType: "none" }}
                  key={child.chap_num}
                >
                  <a
                    className="chap-link"
                    onClick={() => {
                      history.push({
                        pathname: `${url}/${child.chap_num}`,
                        state: {
                          details,
                          chapters,
                          chapterIndex: i,
                        },
                      });
                    }}
                  >
                    {child.chap_title}
                  </a>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
