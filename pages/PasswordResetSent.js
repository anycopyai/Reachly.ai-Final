import React from "react";
import Link from "next/link";

function PasswordResetSent() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      style={{ marginTop: 0 }}
    >
      {" "}
      {/* <-- Added inline style here */}
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-700">
          Password Reset Link Sent
        </h1>

        <p className="mb-6">
          We've sent a password reset link to your email. Please check your
          inbox and follow the instructions to reset your password.
        </p>

        <div className="text-center text-sm text-gray-600 mb-4">
          Didn't receive the email?
          <Link href="/ForgotPassword">
            <div className="text-blue-500 hover:underline ml-2">
              Resend Link
            </div>
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          Remembered your password?
          <Link href="/Login">
            <div className="text-blue-500 hover:underline ml-2">Sign In</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetSent;
