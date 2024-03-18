import React from "react";
import { Button, Input, Modal } from "antd";
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
        footer={false}
        className="share-modal"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div>
              <IoShareSocialOutline className="text-xl text-navblue mt-1" />
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
                className="min-h-10 p-3 bg-navblue rounded-none rounded-r-sm focus:outline-none"
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
