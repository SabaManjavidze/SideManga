import "./Home.css";
import React, { useState, useEffect } from "react";
import PreviewCard from "../../Card/PreviewCard";
import getHome from "../../services/services";
import { Col, Row } from "react-bootstrap";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const arr = await getHome();
    setData(arr);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="parent" style={{ height: loading ? "100vh" : "auto" }}>
      <div className="cont-parent">
        <Row
          md={3}
          sm={2}
          lg={4}
          className="g-6"
          // responsive="sm"
          style={{ width: "90%" }}
        >
          {loading
            ? null
            : data.map((child) => {
                return (
                  <Col xs>
                    <PreviewCard data={child} />
                  </Col>
                );
              })}
        </Row>
      </div>
    </div>
  );
}

export default Home;
