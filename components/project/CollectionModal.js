import React, { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Alert from "../Alert";
import { Button, Input, Modal } from "antd";

const CollectionModal = ({ isOpen, onClose }) => {
  const [collectionName, setCollectionName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Change the threshold as per your requirement
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add event listener for resizing
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const handleCreateCollection = () => {
    // Implement logic to create a new collection
    console.log("Create Collection:", collectionName);

    // Show the alert
    setShowAlert(true);

    // Close the modal
    onClose();
  };

  const handleCloseAlert = () => {
    // Close the alert
    setShowAlert(false);
  };

  return (
    <Modal
      open={isOpen}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      centered={!isMobile}
      closable={false}
      className={`custom-modal-ui ${isMobile && "setting-action-modal top-0"}`}
      wrapClassName={`${isMobile && "bg-white"}`}
    >
      <h3 className="text-base font-semibold text-[#323232] flex items-center gap-4 mb-3">
        <span>
          <img src="/images/ic-collection.svg" alt="collection" />
        </span>
        New Collection
      </h3>
      <div className="flex flex-col gap-3">
        <div>
          <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)] mb-2">
            Collection Name <IoIosInformationCircleOutline cursor="pointer" />
          </label>
          <Input
            type="text"
            className="w-full border p-2 border-[#D9D9D9]"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-6">
          <Button
            className="border border-[#D9D9D9] text-[rgba(0,0,0,0.85)] px-4 py-2 text-base rounded-sm"
            onClick={() => onClose()}
          >
            Cancel
          </Button>

          <Button
            className="bg-navblue text-white hover:text-white hover:bg-navblue px-4 py-2 text-base rounded-sm"
            onClick={handleCreateCollection}
          >
            Create Collection
          </Button>
        </div>
      </div>

      {showAlert && (
        <Alert
          title="Collection Updated successfully!"
          onClose={handleCloseAlert}
        />
      )}
    </Modal>
  );
};

export default CollectionModal;
