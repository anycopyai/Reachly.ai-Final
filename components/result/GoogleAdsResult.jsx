import React from "react";
import ResultCard from "../common/ResultCard";
import { Col, Row } from "antd";

const GoogleAdsResult = ({ googleAdsResultData }) => {
  return (
    <div
      style={{
        height: "72vh",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "#F5F5F5",
      }}
    >
      <div style={{ backgroundColor: "#F5F5F5", padding: 15 }}>
        <Row>
          {googleAdsResultData?.content?.map((data, index) => {
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

export default GoogleAdsResult;
