import { Button } from "antd";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineSaveAlt } from "react-icons/md";
import React, { useState } from "react";
import { useSnackbar } from "notistack";
import SharingModel from "./SharingModel";

const ResultCard = ({ result }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [shareLink, setShareLink] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const words = result.length;
  const cleanText = result.replace(/[^a-zA-Z]/g, "");
  const letterCount = cleanText.length;
  const handleCopyClick = (text) => {
    enqueueSnackbar("Coppied successfully !", { variant: "success" });
    navigator.clipboard.writeText(text);
  };

  const handleShareClick = (result) => {
    setShareLink(result);
    setModalOpen((prevState) => !prevState);
  };

  const handleModelClose = (newState) => {
    setModalOpen(newState);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid white",
          borderRadius: 2,
        }}
      >
        <div style={{ padding: 25 }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgba(0, 0, 0, 0.85)",
              boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.05)",
              borderRadius: 1,
              padding: 12,
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
                fontSize: 13,
                fontWeight: 400,
                fontFamily: "Inter",
                color: "rgba(0, 0, 0, 0.25)",
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
                <Button style={{ borderRadius: 0 }}>
                  <AiOutlineDislike />
                </Button>
                <Button style={{ borderRadius: 0 }}>
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
                <Button
                  style={{ borderRadius: 0 }}
                  icon={<IoShareSocialOutline />}
                  onClick={() => handleShareClick(result)}
                >
                  Share
                </Button>
                <Button
                  style={{ borderRadius: 0 }}
                  icon={<IoCopyOutline />}
                  onClick={() => handleCopyClick(result)}
                >
                  Copy
                </Button>
                <Button style={{ borderRadius: 0 }} icon={<MdOutlineSaveAlt />}>
                  Save
                </Button>
              </span>
            </span>
          </div>
        </div>
      </div>

      <SharingModel
        modalOpen={modalOpen}
        modelClose={handleModelClose}
        shareLink={shareLink}
      />
    </>
  );
};

export default ResultCard;
