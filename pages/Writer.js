// pages/writer.js
import React from 'react';
import QuillEditor from '../components/QuillEditor';
import Sidebar from '../components/Sidebar'; // Adjust the path as necessary

const Writer = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <QuillEditor />
      </div>
    </div>
  );
};

export default Writer;
