


// import React, { useRef, useState } from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// const QuillEditor = () => {
//   const [editorContent, setEditorContent] = useState('');
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(222222,editorRef.current.getContent());
//     }
//   };
//   return (
//     <>
//       <Editor
//         apiKey='wu2f0p4jfqbc1b6k4jgq224rax1wxwoy99h6yltqgyoysvoq'
//         onInit={(evt, editor) => editorRef.current = editor}
//         initialValue=""
//         // value={editorContent}
//         // onChange={setEditorContent}
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
//             'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//             'insertdatetime', 'media', 'table', 'help', 'wordcount','importcss','autosave',
//             'save', 'directionality', 'visualchars','template','codesample', 'pagebreak',
//             'nonbreaking','quickbars','emoticons','accordion'
//           ], 

//           toolbar: "accordion accordionremove | blocks fontfamily",
//           // toolbar: "undo redo print removeformat image link | blocks fontfamily fontsize | bold italic underline strikethrough forecolor backcolor removeformat align numlist bullist | ltr rtl | outdent indent",

//           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//         }}
//       />
//       <button onClick={log}>Log editor content</button>
//     </>
//   );
// }

// export default QuillEditor;



import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const editorStyles = {
  // padding: '20px',
  // margin : '2px',
  backgroundColor: '#fff',
  // minHeight: '300px',
  minHeight:'auto'
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

  .ql-toolbar{
    padding: 2px !important;
    border:1px solid #CBD5E1 !important
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
    <div style={editorStyles} className='m-4 shadow h-auto'>
      <style>{quillContainerStyle}</style>
      <QuillNoSSRWrapper
        placeholder="Start typing here..."
        formats={formats}
        modules={modules}
        value={editorContent}
        onChange={setEditorContent}
      />
      {/* <button onClick={handleWriteForMe}>Write For Me</button> */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};


export default QuillEditor;
