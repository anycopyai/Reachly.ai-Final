import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase'; // Adjust the path
import { FcGoogle } from 'react-icons/fc'; // Ensure you have react-icons installed
import { BsMicrosoft } from 'react-icons/bs'; // For Microsoft icon
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // For loading icon

export default function Signup() {
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
  const [isGoogleSigningUp, setIsGoogleSigningUp] = useState(false);
  const [isMicrosoftSigningUp, setIsMicrosoftSigningUp] = useState(false);

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
            await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            router.push('/dashboard');
        } catch (error) {
            setIsSubmitting(false);
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setErrors({ form: "Email already in use. Please login to continue." });
                    break;
                // Add other cases as needed
                default:
                    setErrors({ form: "An unexpected error occurred. Please try again." });
            }
        }
    };

    const handleExternalSignup = async (provider) => {
        setIsSubmitting(true);
        try {
            await signInWithPopup(auth, provider);
            router.push('/dashboard');
        } catch (error) {
            setIsSubmitting(false);
            // Handle errors for external providers here
            setErrors({ form: "An error occurred with the external provider. Please try again." });
        }
    };

  const handleGoogleSignup = async () => {
      setIsGoogleSigningUp(true);
      const provider = new GoogleAuthProvider();
      try {
          await signInWithPopup(auth, provider);
          router.push('/dashboard');
      } catch (error) {
          setIsGoogleSigningUp(false);
          // Handle errors for Google sign-in here
          setErrors({ form: "An error occurred with Google sign-in. Please try again." });
      }
  };


  const handleMicrosoftSignup = async () => {
      setIsMicrosoftSigningUp(true);
      const provider = new OAuthProvider('microsoft.com');
      try {
          await signInWithPopup(auth, provider);
          router.push('/dashboard');
      } catch (error) {
          setIsMicrosoftSigningUp(false);
          // Handle errors for Microsoft sign-in here
          setErrors({ form: "An error occurred with Microsoft sign-in. Please try again." });
      }
  };


    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Signup Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 py-10 md:p-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Start Your Free Trial</h2>
                <p className="mb-4 text-gray-600">Join Elixcent today and explore new possibilities!</p>
                {errors.form && <p className="text-red-500 mb-4">{errors.form}</p>}
                <form onSubmit={handleSignup} className="w-full max-w-md space-y-4">
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
                      disabled={isGoogleSigningUp} 
                      className="w-full px-4 py-2 border rounded-md hover:bg-gray-50 transition duration-300 ease-in-out mb-2 flex items-center justify-center"
                  >
                      {isGoogleSigningUp ? <><AiOutlineLoading3Quarters className="animate-spin mr-2" /> Signing Up with Google</> : <><FcGoogle className="text-xl mr-2" /> Sign Up with Google</>}
                  </button>

                  <button 
                      type="button" 
                      onClick={handleMicrosoftSignup} 
                      disabled={isMicrosoftSigningUp} 
                      className="w-full px-4 py-2 border rounded-md hover:bg-gray-50 transition duration-300 ease-in-out flex items-center justify-center"
                  >
                      {isMicrosoftSigningUp ? <><AiOutlineLoading3Quarters className="animate-spin mr-2" /> Signing Up with Microsoft</> : <><BsMicrosoft className="text-xl mr-2" /> Sign Up with Microsoft</>}
                  </button>

                </form>
            </div>

            {/* Full Height Image */}
            <div className="w-full h-64 md:h-auto md:w-1/2 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://static.getprospect.com/img/help-center/outreach.jpg")' }}>
                {/* Optional: Overlay or additional content here */}
            </div>
        </div>
    );
}
