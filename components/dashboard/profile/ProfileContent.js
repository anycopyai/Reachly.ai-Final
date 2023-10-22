import React, { useState } from 'react';

function ProfileContent() {
    const [isEditMode, setIsEditMode] = useState(false);
    const [profileData, setProfileData] = useState({
        picture: "https://via.placeholder.com/150",
        name: "John Doe",
        email: "johndoe@example.com",
        mobileNumber: "+1234567890"
    });

    const handleInputChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        // Send `profileData` to backend.
        setIsEditMode(false);
    };

    return (
        <div>
            <img src={profileData.picture} alt="Profile" />
            {isEditMode ? (
                <div>
                    <input type="text" name="name" value={profileData.name} onChange={handleInputChange} />
                    <input type="email" name="email" value={profileData.email} onChange={handleInputChange} />
                    <input type="tel" name="mobileNumber" value={profileData.mobileNumber} onChange={handleInputChange} />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h2>{profileData.name}</h2>
                    <p>{profileData.email}</p>
                    <p>{profileData.mobileNumber}</p>
                    <button onClick={() => setIsEditMode(true)}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default ProfileContent;
