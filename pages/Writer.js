// pages/writer.js
import React from 'react';
import QuillEditor from '../components/QuillEditor';
import Sidebar from '../components/sidebar'; // Adjust the path as necessary

const Writer = () => {
  return (
    <div className="flex flex-col lg:flex-row ml-20 h-screen  overflow-hidden scrollbar-thin" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <QuillEditor />
      </div>
    </div>
  );
};

export default Writer;
