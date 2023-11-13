import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import SignUpForm from '../components/signup/SignUpForm';
import GoogleSignUpButton from '../components/signup/GoogleSignUpButton';
import ErrorMessage from '../components/signup/ErrorMessage';
import { db } from '../lib/firebaseAdmin'; // Import Firestore
import { FieldValue } from 'firebase-admin/firestore';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile if needed
      await updateProfile(user, { displayName: name });

      // Send initial data to Firestore
      const userData = {
        email: email,
        displayName: name,
        credits: 20,
        trialDays: 7,
        emailsSent: 0,
        contactsAdded: 0,
        createdAt: FieldValue.serverTimestamp(),
      };

      // Use the user's UID as the document ID in Firestore
      await db.collection('users').doc(user.uid).set(userData);

      router.push('/dashboard');
    } catch (error) {
      setError(error.message || "Failed to sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        {/* ... Rest of your component JSX ... */}
        <SignUpForm 
          onSignUp={handleSignUp}
          isLoading={isLoading}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />

        {/* ... Rest of your component JSX ... */}
      </div>
    </section>
  );
}

export default SignUp;
