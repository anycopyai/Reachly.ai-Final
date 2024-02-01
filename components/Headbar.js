import React from "react";
import { Col, Row, Button } from "antd";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/router";
import { IoAnalyticsOutline } from "react-icons/io5";

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
          alignItems: "center",
          padding: "24px",
        }}
      >
        <Col xs={24} md={12} lg={12}>
          <span className="headerDynamic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M28.8564 15.0423H7.95998L20.4671 4.18518C20.6671 4.01018 20.5457 3.68518 20.2814 3.68518H17.1207C16.9814 3.68518 16.8493 3.73518 16.7457 3.82447L3.24927 15.5352C3.12565 15.6423 3.02652 15.7748 2.95858 15.9236C2.89063 16.0724 2.85547 16.2341 2.85547 16.3977C2.85547 16.5613 2.89063 16.7229 2.95858 16.8718C3.02652 17.0206 3.12565 17.153 3.24927 17.2602L16.8243 29.0423C16.8778 29.0888 16.9421 29.1138 17.01 29.1138H20.2778C20.5421 29.1138 20.6635 28.7852 20.4636 28.6138L7.95998 17.7566H28.8564C29.0135 17.7566 29.1421 17.628 29.1421 17.4709V15.328C29.1421 15.1709 29.0135 15.0423 28.8564 15.0423Z"
                fill="black"
                fill-opacity="0.85"
              />
            </svg>

            {formattedRouteName}
            <FaStar color="#ffa500" style={{ hight: "22px", width: "22px" }} />
          </span>
        </Col>
        <Col
          xs={24}
          md={12}
          lg={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            "@media (max-width: 576px)": {
              justifyContent: "left",
            },
          }}
        >
          <Button
            style={{
              color: "#000000",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              borderRadius: 0,
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <IoAnalyticsOutline /> 5 Credits Left{" "}
            </span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Headbar;
