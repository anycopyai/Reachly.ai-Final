const TopNav = ({ credits, onWriteCopy }) => {
    // Function to handle 'Write Copy' button click
    const handleWriteCopyClick = () => {
      if (onWriteCopy) {
        onWriteCopy();
      }
      // Additional logic for 'Write Copy' button can be added here
    };
  
    return (
      <div className="top-nav flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
        <button 
          onClick={handleWriteCopyClick}
          className="write-copy-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Write Copy
        </button>
        <span className="credits text-gray-800">Credits Left: {credits}</span>
      </div>
    );
  };
  
  export default TopNav;
  