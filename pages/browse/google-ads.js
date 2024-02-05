import React, { useState } from "react";
import { Col, Row } from "antd";
import Sidebar from "../../components/sidebar";
import Head from "next/head";
import Headbar from "../../components/Headbar";
import { Tabs } from "antd";
import GoogleAdsForm from "../../components/form/GoogleAdsForm";
import GoogleAdsResult from "../../components/result/GoogleAdsResult";


const GoogleAds = () => {
  const[resultData, setResult]= useState()
  const receiveGoogleadsData = (data) => {
    setResult(data);
  };
 
  const items = [
    {
      key: "1",
      label: "Prompt",
      children: <GoogleAdsForm  googleAdsData={receiveGoogleadsData}/>,
    },
  ];
  const result = [
    {
      key: "1",
      label: "Result",
      children: <GoogleAdsResult googleAdsResultData={resultData} />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
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
          <Row style={{ marginLeft: 20, marginTop: 15, padding: 10 }}>
            <Col xs={24} md={10} lg={10}>
            <Tabs
            style={{color:'#0033ff'}}
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                    indicator={{
                      size: (origin) => origin - 0,
                    }}
                  />
            </Col>
            <Col
              xs={24}
              md={14}
              lg={14}
            >
              <Tabs
              style={{color:'#0033ff'}}
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

export default GoogleAds;
