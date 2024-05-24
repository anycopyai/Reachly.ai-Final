import React, { useState } from "react";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const editorStyles = {
  backgroundColor: "#fff",
  minHeight: "auto",
  border: "none",
};

const quillContainerStyle = `
  .ql-container {
    border: none !important;
    box-shadow: none !important;
  }

  .ql-editor {
    font-size: 18px; /* Default font size */
  }

  .ql-editor h1 {
    font-size: 36px; /* Custom font size for H1 */
  }

  .ql-editor h2 {
    font-size: 32px; /* Custom font size for H2 */
  }

  .ql-toolbar {
    border: none !important;
    box-shadow: none !important;
  }
`;

const toolbarOptions = [
  [{ header: 1 }, { header: 2 }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["blockquote", "code-block"],
  ["link", "image"],
  ["clean"],
  ["align", "indent"],
  ["color"],
  ["background"],
  ["print"],
];

const QuillEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
    "align",
    "indent",
    "color",
    "background",
    "print",
  ];

  return (
    <div style={editorStyles} className="m-4">
      <style>{quillContainerStyle}</style>
      <QuillNoSSRWrapper
        placeholder="Start typing here..."
        formats={formats}
        modules={modules}
        value={editorContent}
        onChange={setEditorContent}
      />
    </div>
  );
};

export default QuillEditor;