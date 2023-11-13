const ErrorMessage = ({ message }) => {
  return (
    <div className={`text-red-500 mt-4 mb-4 ${!message && 'hidden'}`}>
      {message}
    </div>
  );
};

export default ErrorMessage;
