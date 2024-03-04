import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiGarageThin } from "react-icons/pi";
import Alert from "../Alert";
import ModalWrapper from "../ModalWrapper";

const CollectionModal = ({ isOpen, onClose }) => {
  const [collectionName, setCollectionName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center gap-2 mb-3">
        <PiGarageThin />
        <h3 className="text-base font-semibold ">New Collection</h3>
      </div>
      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
        Collection Name <IoIosInformationCircleOutline cursor="pointer" />
      </label>
      <input
        type="text"
        className="w-full border p-2 mb-4"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
      />
      <div className="flex justify-end gap-3">
        <button
          className="border-1 text-gray-700 px-4 py-2 "
          onClick={() => onClose()}
        >
          Cancel
        </button>

        <button
          className="bg-navblue text-white px-4 py-2 mr-2 "
          onClick={handleCreateCollection}
        >
          Create Collection
        </button>
      </div>

      {showAlert && (
        <Alert
          title="Collection Updated successfully!"
          onClose={handleCloseAlert}
        />
      )}
    </ModalWrapper>
  );
};

export default CollectionModal;
