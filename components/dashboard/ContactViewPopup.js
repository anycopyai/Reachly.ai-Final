function ContactViewPopup({ contact, onClose }) {
  return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-black z-10">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
              <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{contact.name}</h2>
                  <button 
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-600 transition duration-150"
                  >
                      <i className="fas fa-times"></i>
                  </button>
              </div>
              <div className="mb-2 flex items-center">
                  <i className="fas fa-envelope text-gray-500 mr-2"></i>
                  <p className="text-gray-700">{contact.email}</p>
              </div>
              <div className="mb-2 flex items-center">
                  <i className="fas fa-phone-alt text-gray-500 mr-2"></i>
                  <p className="text-gray-700">{contact.phone}</p>
              </div>
              <div className="mt-6 text-right">
                  <button 
                      onClick={onClose}
                      className="bg-reachly-blue text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150"
                  >
                      Close
                  </button>
              </div>
          </div>
      </div>
  );
}

export default ContactViewPopup;
