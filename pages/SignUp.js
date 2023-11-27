import React, { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { firebaseApp } from '../lib/firebase.js'; // Adjust the path to your firebase.js file

import axios from 'axios';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Link from 'next/link';


function Signup() {
    const router = useRouter();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        consent: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (userData.password !== userData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!userData.consent) {
            newErrors.consent = "You must agree to the terms and conditions";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            const auth = getAuth(firebaseApp);
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;

            // Send additional data along with UID to Flask API
            await axios.post('https://api.elixcent.com/signup', {
                uid: user.uid,  // Include UID
                name: userData.name,
                email: userData.email,
                // any other user data
            });

                // Redirect to dashboard or further steps after successful signup
                router.push('/icebreaker');
            } catch (error) {
                setIsSubmitting(false);
                setErrors({ form: error.message || "An unexpected error occurred. Please try again." });
            }
        };
  

        const handleGoogleSignup = async () => {
            try {
                const auth = getAuth(firebaseApp);
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
        
                // Send user data to Firebase
                await axios.post('https://api.elixcent.com/signup', {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    // additional data if needed
                });
        
                // Redirect after successful signup
                router.push('/icebreaker');
            } catch (error) {
                // Handle errors here
                console.error('Error during Google sign-up:', error);
            }
        };
        

        const handleMicrosoftSignup = async () => {
            try {
                const auth = getAuth(firebaseApp);
                const provider = new OAuthProvider('microsoft.com');
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
        
                // Send user data to Firebase
                await axios.post('https://api.elixcent.com/signup', {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    // additional data if needed
                });
        
                // Redirect after successful signup
                router.push('/icebreaker');
            } catch (error) {
                // Handle errors here
                console.error('Error during Microsoft sign-up:', error);
            }
        };
        





return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#E1DFDD]"> {/* Replace with your desired background */}
        
        {/* Signup Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 py-10 md:p-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Start your 7 days free trial
</h2>
            <p className="mb-4 text-gray-600">Join Elixcent today and Elevate Your Outreach</p>
            {errors.form && <p className="text-red-500 mb-4">{errors.form}</p>}
            <form onSubmit={handleSignup} className="w-full max-w-md space-y-4">
                {/* Form Fields */}
                {/* ... */}
                {['name', 'email', 'password', 'confirmPassword'].map(field => (
                    <div key={field}>
                        <input
                            type={field === 'confirmPassword' ? 'password' : (field.includes('password') ? 'password' : 'text')}
                            id={field}
                            name={field}
                            placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                            value={userData[field]}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className={`w-full h-12 px-4 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors[field] ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-300'}`}
                        />
                        {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
                    </div>
                ))}
                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={userData.consent}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="checkbox checkbox-primary mr-2"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                        By signing up, I agree to Elixcent's Terms of Service and Privacy Policy.
                    </label>
                </div>
                {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full mt-6 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center justify-center"
                >
                  {isSubmitting ? <><AiOutlineLoading3Quarters className="animate-spin mr-2" /> Creating Your Account</> : 'Create Account'}
                </button>
              <button 
                  type="button" 
                  onClick={handleGoogleSignup} 
                  disabled={isSubmitting} 
                  className="w-full px-4 py-2 border rounded-md hover:bg-gray-50 transition duration-300 ease-in-out mb-2 flex items-center justify-center"
              >
                  <FcGoogle className="text-xl mr-2" /> Sign Up with Google
              </button>
              <button 
                  type="button" 
                  onClick={handleMicrosoftSignup} 
                  disabled={isSubmitting} 
                  className="w-full px-4 py-2 border rounded-md hover:bg-gray-50 transition duration-300 ease-in-out flex items-center justify-center"
              >
                  <BsMicrosoft className="text-xl mr-2" /> Sign Up with Microsoft
              </button>
            </form>
            <p className="mt-4 text-sm">
                Already have an account? <a href="/Login" className="text-indigo-600 hover:text-indigo-500">Login here</a>
            </p>
        </div>

        {/* Benefits Checklist Section */}
        <div className="flex-1 flex flex-col justify-center bg-indigo-100 px-6 py-10 md:p-16">
            <div className="max-w-md mx-auto space-y-4">
                <h3 className="text-2xl font-bold text-center text-gray-800">Benefits of Joining Elixcent</h3>
                <ul className="list-none space-y-2">
                    {/* Replace with your actual benefits */}
                    {["Customizable Workflows", "Advanced Analytics", "User-Friendly Interface", "24/7 Customer Support", "Secure & Reliable"].map((benefit, index) => (
                        <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">✔</span>
                            <span className="text-gray-700">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
);


};
export default Signup;
