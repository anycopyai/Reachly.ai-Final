import React, { useState, useCallback } from 'react';
import { storage } from '../../lib/firebase'; // Adjust this path as necessary to point to your firebase config file
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Button as NextUIButton, Progress } from '@nextui-org/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const CsvUploadForm = ({ onFileLoaded }) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploadComplete, setIsUploadComplete] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const uploadFileToFirebase = (file) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user && file && file.type === "text/csv") {
                const uid = user.uid; // Get the unique user ID
                const storageRef = ref(storage, `users/${uid}/csv/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        setUploadProgress(progress);
                    },
                    (error) => {
                        console.error("Upload Error:", error);
                        setUploadError(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            setIsUploadComplete(true);
                            onFileLoaded(downloadURL);
                        });
                    }
                );
            } else {
                // Handle the case where there is no user signed in
                // You might want to set an error or take some other action here
            }
        });
    };

    const handleFileChange = useCallback((event) => {
        const file = event.target.files[0];
        uploadFileToFirebase(file);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            uploadFileToFirebase(file);
        }
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">CSV Upload</h3>
            <p className="text-sm text-gray-600 mb-5">Drag and drop your CSV file here, or click to select a file from your computer.</p>
            <div 
                className="flex flex-col items-center justify-center w-full h-48 bg-white border-2 border-blue-500 border-dashed rounded-lg cursor-pointer hover:border-blue-600"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    accept=".csv"
                    className="w-full h-48 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                />
                <div className="text-center">
                    {/* SVG and Text */}
                    <svg className="mx-auto mb-2 h-12 w-12 text-blue-500" /* SVG content */ ></svg>
                    <p className="text-sm text-gray-800">Drag 'n' drop some files here, or click to select files</p>
                </div>
                {uploadProgress > 0 && (
                    <div className="mt-4 w-full">
                        <Progress value={uploadProgress} color="primary" status={uploadProgress === 100 ? "success" : "primary"} />
                    </div>
                )}
            </div>
            {isUploadComplete && (
                <div className="mt-4">
                    <NextUIButton color="success">Proceed to Next Step</NextUIButton>
                </div>
            )}
            {uploadError && (
                <div className="mt-4 text-red-500">
                    Error uploading file: {uploadError.message}
                </div>
            )}
        </div>
    );
};

export default CsvUploadForm;
