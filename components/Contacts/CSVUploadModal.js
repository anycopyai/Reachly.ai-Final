import React from 'react';

const CSVUploadModal = ({ isOpen, onClose, onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      {/* Modal content */}
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CSVUploadModal;
