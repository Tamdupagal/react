import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />
      <div>
        <h2>Content</h2>
        <p>text</p>
      </div>
    </div>
  );
};

export default TextEditor;
