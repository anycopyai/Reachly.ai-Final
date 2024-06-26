import React from "react";
import { Col, Row } from "antd";
import Sidebar from "../../components/sidebar";
import Head from "next/head";
import Headbar from "../../components/Headbar";
import PressReleaseForm from "../../components/form/PressReleaseForm";
import PressReleaseResult from "../../components/result/PressReleaseResult";
import { Tabs } from "antd";
import FreshForm from "../../components/form/CallToActionForm";

const items = [
  {
    key: "1",
    label: "Prompt",
    children: <FreshForm/>,
  },
];
const result = [
  {
    key: "1",
    label: "Result",
    // children: <PressReleaseResult />,
  },
];


const CallToAction = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Head>
        <title>RDMI INDIA - Call To Action </title>
        <meta name="description" content="RDMI INDIA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex h-screen ml-20 overflow-hidden bg-[#ffffff]">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Headbar />
          <Row style={{ marginLeft: 20, marginTop: 15, padding: 10 }}>
            <Col xs={24} md={10} lg={10}>
              <Row>
                <Col xs={24} md={24} lg={24}>
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                    indicator={{
                      size: (origin) => origin - 0,
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs={24}
              md={14}
              lg={14}
              style={{
                height: "70vh",
                overflowY: "auto",
                overflowX: "hidden",
                padding: 5,
              }}
            >
              <Tabs
                defaultActiveKey="1"
                items={result}
                onChange={onChange}
                indicator={{
                  size: (origin) => origin - 0,
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
