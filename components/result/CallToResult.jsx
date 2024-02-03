import React from "react";
import ResultCard from "../common/ResultCard";
import { Col, Row } from "antd";

const CallToResult = ({ calltodata }) => {
  return (
    <div
      style={{
        height: "72vh",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "#f9f8f7",
      }}
    >
      <div style={{ backgroundColor: "#f9f8f7", padding: 15 }}>
        <Row>
          {calltodata?.content?.map((data, index) => {
            return (
              <Col
                xs={24}
                md={24}
                lg={24}
                key={index}
                style={{ marginBottom: 15 }}
               
              >
                <ResultCard result={data} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default CallToResult;
