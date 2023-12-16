import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const editorStyles = {
  padding: '20px',
  backgroundColor: '#fff',
  minHeight: '300px',
};

const quillContainerStyle = `
  .ql-container {
    border: none !important;
  }

  .ql-editor {
    font-size: 16px; /* Default font size */
  }

  .ql-h1 {
    font-size: 28px; /* Custom font size for H1 */
  }

  .ql-h2 {
    font-size: 24px; /* Custom font size for H2 */
  }
`;

const QuillEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // New state for error message

  const toolbarOptions = [
    [{ 'header': 1 }, { 'header': 2 }], // H1, H2
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    ['link', 'image'],
    ['clean'], // Remove formatting
    ['align', 'indent'], // Alignment and indentation
    ['color'], // Text color
    ['background'], // Background color
    [{ 'header': [3, 4, 5, false] }], // H3, H4, H5, Paragraph selector
    ['print'], // Print
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'blockquote', 'code-block',
    'link', 'image', 'align', 'indent', 'color', 'background',
    'print', // Custom format for print
  ];

  const handleWriteForMe = async () => {
    try {
      const response = await fetch('https://api.elixcent.com/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: editorContent }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setEditorContent(prevContent => prevContent + '\n' + data.text);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(`An error occurred: ${error.message}`);
    }
  };
  return (
    <div style={editorStyles}>
      <style>{quillContainerStyle}</style>
      <QuillNoSSRWrapper
        placeholder="Start typing here..."
        formats={formats}
        modules={modules}
        value={editorContent}
        onChange={setEditorContent}
      />
      <button onClick={handleWriteForMe}>Write For Me</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};


export default QuillEditor;
