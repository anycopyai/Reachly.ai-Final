const SignUpForm = ({ onSignUp, isLoading, name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword }) => {
  return (
    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={onSignUp}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          id="name"
          className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <input
          type="password"
          id="password"
          className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Confirm Password Field */}
      <div>
        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Sign Up Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white ${isLoading ? 'opacity-50' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
