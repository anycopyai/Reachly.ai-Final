// components/QuillEditor.js
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

  return (
    <div style={editorStyles}>
      <style>{quillContainerStyle}</style>
      <QuillNoSSRWrapper
        placeholder="Start typing here..."
        formats={formats}
        modules={modules}
      />
    </div>
  );
};

export default QuillEditor;
