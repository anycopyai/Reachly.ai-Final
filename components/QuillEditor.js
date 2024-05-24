import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "antd";
import { PiPencilSimpleLineBold } from "react-icons/pi";

const QuillEditor = () => {
  const [editorContent, setEditorContent] = useState("");
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(222222, editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="wu2f0p4jfqbc1b6k4jgq224rax1wxwoy99h6yltqgyoysvoq"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          placeholder: 'write something',
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
            "importcss",
            "autosave",
            "save",
            "directionality",
            "visualchars",
            "template",
            "codesample",
            "pagebreak",
            "nonbreaking",
            "emoticons",
            "accordion",
          ],

          toolbar:
            "undo redo print removeformat image link | blocks fontfamily fontsize | bold italic underline strikethrough forecolor backcolor removeformat align numlist bullist | ltr rtl | outdent indent",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; } p { font-size: 18px; } h1 { font-size: 32px; } h2 { font-size: 28px; } h3 { font-size: 24px; } h4 { font-size: 20px; } h5 { font-size: 18px; }",
        }}
      />
     
    </>
  );
};

export default QuillEditor;