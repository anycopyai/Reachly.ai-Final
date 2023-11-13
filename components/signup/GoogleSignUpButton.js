const GoogleSignUpButton = ({ onSignUpWithGoogle, isLoading }) => {
  return (
    <button 
      onClick={onSignUpWithGoogle} 
      className="mt-4 bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-md border w-full flex items-center justify-center transition duration-300 ease-in-out"
      disabled={isLoading}
    >
      Sign Up with Google
    </button>
  );
};

export default GoogleSignUpButton;
