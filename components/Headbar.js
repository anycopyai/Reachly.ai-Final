import React from "react";
import { Col, Row, Button } from "antd";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/router";

function formatRouteName(routeName) {
  const parts = routeName.split("-");
  const capitalizedParts = parts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  );
  const formattedName = capitalizedParts.join(" ");
  return formattedName;
}

const Headbar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const routeParts = pathname.split("/");
  const lastRouteName = routeParts[routeParts.length - 1];
  const formattedRouteName = formatRouteName(lastRouteName);

  return (
    <div style={{ margin: 1 }}>
      <Row
        gutter={4}
        style={{
          display: "flex",

          justifyContent: "space-between",
          margin: 30,
          marginTop: 60,
        }}
      >
        <Col xs={24} md={12} lg={12}>
          {" "}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              fontFamily: "Barlow Semi Condensed,sans-serif",
            }}
          >
            {formattedRouteName}
            <FaStar color="#ffa500" style={{ marginLeft: 10 }} size={20} />
          </span>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <span
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
              fontWeight: 500,
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              fontFamily: "Barlow Semi Condensed,sans-serif",
            }}
          >
            <Button shape="round" style={{ color: "#0033FF", marginRight: 20 }}>
              Click Here To Get Unlimited
            </Button>
            <Button
              shape="default"
              style={{ backgroundColor: "#0033FF", color: "white" }}
            >
              Write for me
            </Button>
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Headbar;
