import React, { useEffect, useState } from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { domain, img_url } from "../Variables";
import axios from "axios";

export default function PreviewCard({ data: { manga_id, title, chapters } }) {
  const history = useHistory();
  const redirect = () => {
    history.push({
      pathname: `/Manga/${manga_id}`,
    });
  };

  return (
    <Col style={{ padding: "10px 10px", width: "100%" }}>
      <a style={{ cursor: "pointer" }} onClick={redirect}>
        <Card border="success" className="bg-dark text-white">
          <Card.Img
            src={`${domain}${img_url}${manga_id}.jpg`}
            style={{ objectFit: "cover" }}
            alt="Card image"
          />
          <div
            style={{
              width: "100%",
              position: "absolute",
              background: "rgb(0 0 7 / 64%)",
              bottom: "0",
            }}
          >
            <Card.Title
              style={{
                textAlign: "center",
              }}
            >
              {title}
            </Card.Title>
          </div>
        </Card>
      </a>
    </Col>
  );
}
