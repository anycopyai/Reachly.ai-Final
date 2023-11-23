import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import axios from 'axios';
import { FiUpload } from 'react-icons/fi'; // Importing an upload icon
import { CircularProgressbar } from 'react-circular-progressbar'; // For progress bar
import 'react-circular-progressbar/dist/styles.css'; // Import progress bar styles

function CSVUploadModal({ isOpen, onClose }) {
    const [isFileOver, setIsFileOver] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const onDrop = acceptedFiles => {
        const file = acceptedFiles[0];
        setIsUploading(true);
        Papa.parse(file, {
            complete: (result) => {
                // Example: upload to the backend
                const config = {
                    onUploadProgress: progressEvent => {
                        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setUploadProgress(percentCompleted);
                    }
                };
                axios.post('/api/upload-csv', { data: result.data }, config)
                    .then(response => {
                        // Handle response
                        setIsUploading(false);
                        onClose(); // Close modal after upload
                    })
                    .catch(error => {
                        console.error('Error uploading CSV data:', error);
                        setIsUploading(false);
                    });
            },
            header: true
        });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        onDragEnter: () => setIsFileOver(true),
        onDragLeave: () => setIsFileOver(false)
    });

    if (!isOpen) {
        return null;
    }

    return (
        <dialog id="csv_upload_modal" className="modal modal-bottom sm:modal-middle" open={isOpen}>
            <div className="modal-box">
                <div {...getRootProps()} className="dropzone py-4 flex flex-col items-center justify-center">
                    <input {...getInputProps()} />
                    {isUploading ? (
                        <CircularProgressbar value={uploadProgress} text={`${uploadProgress}%`} />
                    ) : (
                        <>
                            <FiUpload size={50} color={isFileOver ? 'green' : 'black'} />
                            <p>{isFileOver ? 'Drop the files here ...' : 'Drag \'n\' drop CSV file here, or click to select file'}</p>
                        </>
                    )}
                </div>
                <div className="modal-action">
                    <button className="btn" onClick={onClose} disabled={isUploading}>Close</button>
                </div>
            </div>
        </dialog>
    );
}

export default CSVUploadModal;
