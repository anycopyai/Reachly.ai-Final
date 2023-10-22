import React, { useState } from 'react';
import axios from 'axios';

const CreateEmailCopy = () => {
  const [url, setUrl] = useState('');
  const [emailCopy, setEmailCopy] = useState('');

  const fetchEmailCopy = async () => {
    try {
      const response = await axios.get(`/api/generateEmailCopy?url=${url}`);
      setEmailCopy(response.data.emailCopy);
    } catch (error) {
      console.error('Error generating email copy:', error);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl mb-4">Create ChatGPT Email Copy</h1>
      <div className="flex flex-col items-center">
        <input 
          className="p-2 border rounded"
          type="text" 
          placeholder="Enter Website URL" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
        />
        <button 
          className="p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-400"
          onClick={fetchEmailCopy}
        >
          Generate Email Copy
        </button>
        <div className="mt-6">
          <h2 className="text-xl">Email Copy:</h2>
          <p className="mt-2 p-4 bg-white rounded border">{emailCopy || 'Your email copy will appear here.'}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateEmailCopy;
