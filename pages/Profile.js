import React, { useState, useEffect } from 'react';
import { getAuth, updateEmail, updatePassword, sendEmailVerification } from 'firebase/auth';
import { doc, getFirestore, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import AccountSidebar from '../components/account/AccountSidebar';
import withAuth from '../hoc/withAuth';

function Profile() {
    const auth = getAuth();
    const firestore = getFirestore();
    const user = auth.currentUser;
    const userRef = doc(firestore, 'users', user.uid);

    const [profile, setProfile] = useState({ name: '', email: '', phoneNumber: '', bio: '', emailVerified: user.emailVerified });
    const [editableProfile, setEditableProfile] = useState({ name: '', email: '', phoneNumber: '', bio: '', password: '', confirmPassword: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                setProfile({ ...userData, emailVerified: user.emailVerified });
            }
        };

        fetchUserData(); // Fetch user data when the component mounts
    }, [userRef]);

    const updateProfile = async () => {
        if (editableProfile.password !== editableProfile.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const docSnap = await getDoc(userRef);
        if (!docSnap.exists()) {
            console.log('Document does not exist, creating new one');
            await setDoc(userRef, {
                name: editableProfile.name,
                phoneNumber: editableProfile.phoneNumber,
                bio: editableProfile.bio
            });
        } else {
            await updateDoc(userRef, {
                name: editableProfile.name,
                phoneNumber: editableProfile.phoneNumber,
                bio: editableProfile.bio
            });
        }

        if (user.email !== editableProfile.email) {
            await updateEmail(user, editableProfile.email);
            sendEmailVerification(user);
            setProfile(prev => ({ ...prev, email: editableProfile.email, emailVerified: false }));
        }

        if (editableProfile.password) {
            await updatePassword(user, editableProfile.password);
        }

        setIsEditing(false);
    };

    const startEditing = () => {
        setEditableProfile({ ...profile, password: '', confirmPassword: '' });
        setIsEditing(true);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <AccountSidebar />
            <div className="flex-1 flex flex-col p-10">
                <h1 className="text-2xl font-bold mb-8 text-gray-800">Profile Settings</h1>
                <div className="bg-white p-6 rounded-lg shadow">
                    {isEditing ? (
                        <>
                            <InputField label="Name" value={editableProfile.name} onChange={e => setEditableProfile(prev => ({ ...prev, name: e.target.value }))} />
                            <InputField label="Email" type="email" value={editableProfile.email} onChange={e => setEditableProfile(prev => ({ ...prev, email: e.target.value }))} />
                            <InputField label="Phone Number" type="tel" value={editableProfile.phoneNumber} onChange={e => setEditableProfile(prev => ({ ...prev, phoneNumber: e.target.value }))} />
                            <Textarea label="Bio" value={editableProfile.bio} onChange={e => setEditableProfile(prev => ({ ...prev, bio: e.target.value }))} />
                            <InputField label="Password" type="password" value={editableProfile.password} onChange={e => setEditableProfile(prev => ({ ...prev, password: e.target.value }))} />
                            <InputField label="Confirm Password" type="password" value={editableProfile.confirmPassword} onChange={e => setEditableProfile(prev => ({ ...prev, confirmPassword: e.target.value }))} />
                            <button className="btn btn-primary" onClick={updateProfile}>Update Profile</button>
                        </>
                    ) : (
                        <>
                            <InputField label="Name" value={profile.name} disabled />
                            <InputField label="Email" type="email" value={profile.email} disabled />
                            {profile.emailVerified ? null : <p>Email pending verification</p>}
                            <InputField label="Phone Number" type="tel" value={profile.phoneNumber} disabled />
                            <Textarea label="Bio" value={profile.bio} disabled />
                            <button className="btn btn-secondary" onClick={startEditing}>Edit Profile</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const InputField = ({ label, type = 'text', value, onChange, disabled }) => (
    <div>
        <label className="block text-sm font-bold mb-2">{label}</label>
        <input type={type} value={value} onChange={onChange} disabled={disabled} className="input input-bordered w-full" />
    </div>
);

const Textarea = ({ label, value, onChange, disabled }) => (
    <div className="mb-6">
        <label className="block text-sm font-bold mb-2">{label}</label>
        <textarea rows="3" value={value} onChange={onChange} disabled={disabled} className="textarea textarea-bordered w-full"></textarea>
    </div>
);

export default withAuth(Profile);
