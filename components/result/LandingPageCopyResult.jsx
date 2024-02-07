import React from "react";
import { Col, Row } from "antd";

const LandingPageCopyResult = ({ googleAdsResultData }) => {
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
        <Col xs={24} sm={24} md={4} lg={4}> <div className="learn-more">About</div></Col>
          <Col xs={24} sm={24} md={5} lg={5}>
          <div className="learn-more">Solutions</div>
            
            </Col>
          <Col xs={24} sm={24} md={5} lg={5}>
          <div className="learn-more">Support</div>
            </Col>
          <Col xs={24} sm={24} md={5} lg={5}>
          <div className="learn-more">Company</div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5}> <div className="learn-more">Legal</div></Col>
          
        </Row>
      </div>
    </div>
  );
};

export default LandingPageCopyResult;
