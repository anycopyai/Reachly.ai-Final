import React from "react";
import { Col, Row, Typography } from "antd";
import Sidebar from "../../components/sidebar";
import Head from "next/head";
import Headbar from "../../components/Headbar";
import PressReleaseForm from "../../components/form/PressReleaseForm";

const PressRelease = () => {
  return (
    <>
      <Head>
        <title>RDMI INDIA - Press release</title>
        <meta name="description" content="RDMI INDIA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex h-screen ml-20 overflow-hidden bg-[#ffffff]">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Headbar />
          <Row style={{ marginLeft: 20, marginTop: 30, padding: 10 }}>
            <Col xs={24} md={10} lg={10}>
              <Row>
                <Col xs={24} md={24} lg={24}>
                  <Typography.Title
                    level={5}
                    style={{ color: "blue", fontWeight: 500 }}
                  >
                    Prompt
                  </Typography.Title>
                </Col>

                <Col
                  xs={24}
                  md={24}
                  lg={24}
                  style={{
                    height: "70vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                    padding: 5,
                  }}
                >
                  <PressReleaseForm />
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={14} lg={14} style={{backgroundColor:'#f9f8f7'}}>
              <Typography.Title
                level={5}
                style={{ color: "blue", fontWeight: 500 }}
              >
                Result
              </Typography.Title>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default PressRelease;
