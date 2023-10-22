import React, { useState } from 'react';

function SecurityContent() {
    const [isPasswordEditMode, setIsPasswordEditMode] = useState(false);
    const [isMFAEditMode, setIsMFAEditMode] = useState(false);
    
    const handlePasswordSave = () => {
        // Save new password to backend.
        setIsPasswordEditMode(false);
    };

    const handleMFAEnable = () => {
        // Enable MFA for user.
        setIsMFAEditMode(false);
    };

    return (
        <div className="security-content">
            <div className="password-section">
                <h2>Password</h2>
                {isPasswordEditMode ? (
                    <div>
                        <input type="password" placeholder="Current Password" />
                        <input type="password" placeholder="New Password" />
                        <input type="password" placeholder="Confirm New Password" />
                        <button onClick={handlePasswordSave}>Save</button>
                        <button onClick={() => setIsPasswordEditMode(false)}>Cancel</button>
                    </div>
                ) : (
                    <button onClick={() => setIsPasswordEditMode(true)}>Change Password</button>
                )}
            </div>
            
            <div className="mfa-section">
                <h2>Multi-Factor Authentication</h2>
                {isMFAEditMode ? (
                    <div>
                        <p>Set up your MFA method here...</p>
                        <button onClick={handleMFAEnable}>Enable MFA</button>
                        <button onClick={() => setIsMFAEditMode(false)}>Cancel</button>
                    </div>
                ) : (
                    <button onClick={() => setIsMFAEditMode(true)}>Setup MFA</button>
                )}
            </div>
        </div>
    );
}

export default SecurityContent;
