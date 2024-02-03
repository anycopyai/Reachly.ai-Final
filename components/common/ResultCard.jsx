import { Button } from "antd";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineSaveAlt } from "react-icons/md";

const ResultCard = ({ result }) => {
  const words = result.length;
  const cleanText = result.replace(/[^a-zA-Z]/g, "");
  const letterCount = cleanText.length;
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text)

  };
  return (
    <div
      class=" hover:border-10 hover:border-solid hover:border-[#466ab1]"
      style={{
        backgroundColor: "white",
        border: "1px solid white",
        borderRadius:2
      }}
    >
      <div style={{ padding: 25 }}>
        <p
          style={{
            fontSize: 16,
            fontFamily:'Inter',
            fontWeight:400,
            // lineHeight: 24,
            color: 'rgba(0, 0, 0, 0.85)',
          }}
        >
          {result}
        </p>
        <div>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "10px",
              fontSize: 14,
              fontWeight: 400,
              fontFamily:'Inter',
              // lineHeight: 22,
              color: 'rgba(0, 0, 0, 0.25)', 
            }}
          >
            <div>
              {words} words / {letterCount} characters
            </div>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Button>
                <AiOutlineDislike />
              </Button>
              <Button>
                <AiOutlineLike />
              </Button>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Button icon={<IoShareSocialOutline />}>Share</Button>
              <Button icon={<IoCopyOutline />} onClick={() => handleCopyClick(result)}>
                Copy
              </Button>
              <Button icon={<MdOutlineSaveAlt />}>Save</Button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
