import React from "react";
import { Modal } from "antd";
import { Input } from "antd";
import { Col, Row } from "antd";
import { Button } from "antd";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { useSnackbar } from "notistack";

const SharingModel = ({ modalOpen, modelClose, shareLink }) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleShareModelClose = () => {
    modelClose(!modalOpen);
  };
  const handleCopyShareLink = () => {
    enqueueSnackbar("Coppied successfully !", { variant: "success" });
    navigator.clipboard.writeText(shareLink);
  };
  return (
    <>
      <Modal
        centered
        open={modalOpen}
        onCancel={handleShareModelClose}
        footer={(_, { OkBtn, CancelBtn }) => <></>}
        className="share-modal"
      >
        {/* <div style={{ marginTop: 5 }}>
          <Row style={{ padding: 10 }} gutter={12}>
            <Col xs={2} md={2} lg={2}>
              <IoShareSocialOutline size={25} style={{ color: "#0033FF" }} />
            </Col>
            <Col xs={22} md={22} lg={22}>
              <Row>
                <Col xs={24} md={24} lg={24}>
                  <p
                    style={{
                      alignSelf: "stretch",
                      color: "rgba(0, 0, 0, 0.85)",
                      fontSize: "18px",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      lineHeight: "24px",
                      wordWrap: "break-word",
                    }}
                  >
                    Sharing Info
                  </p>
                </Col>
                <Col xs={24} md={24} lg={24} style={{ marginTop: 5 }}>
                  <p
                    style={{
                      alignSelf: "stretch",
                      color: "rgba(0, 0, 0, 0.85)",
                      fontSize: "15px",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: " 22px",
                      wordWrap: "break-word",
                    }}
                  >
                    Copy and paste this link to share
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={24} lg={24} style={{ marginTop: 15 }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input
                  className="inputBox"
                  placeholder="https://app.anycopy.co"
                  disabled
                  value={shareLink}
                />

                <Button
                  type="primary"
                  className="btnTemplateSubmit"
                  style={{ width: "10%" }}
                  icon={<IoCopyOutline />}
                  onClick={handleCopyShareLink}
                ></Button>
              </span>
            </Col>
          </Row>
        </div> */}

        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div>
              <IoShareSocialOutline size={25} style={{ color: "#0033FF" }} />
            </div>
            <div>
              <h4 className="text-base font-medium text-[rgba(0,0,0,0.85)]">
                Sharing Info
              </h4>
              <p className="text-sm text-[rgba(0,0,0,0.85)]">
                Copy and paste this link to share
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Input
              className="h-10 p-4 rounded-l-sm border-r-0"
              placeholder="https://app.anycopy.co"
              disabled
              value={shareLink}
            />
            <div>
              <Button
                type="primary"
                className="min-h-10 p-3 bg-navblue rounded-none rounded-r-sm"
                onClick={handleCopyShareLink}
              >
                <IoCopyOutline />
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SharingModel;
