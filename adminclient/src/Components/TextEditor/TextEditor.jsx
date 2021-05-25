import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
// import "./TextEditor.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#008ae6",
    border: "1px solid #e0ebeb",
    // height: "80%",
    width: "70%",
    borderRadius: "5px",
    color: "white",
    padding: "1%",
    fontSize: "2rem",
  },
  box: {
    border: "1px solid #e0ebeb",
    // height: "80%",
    width: "70%",
    borderRadius: "5px",
  },
  editor1: {
    marginTop: "5%",
    maxWidth: "50px",
    maxHeight: 1000,
  },
  divider: {
    margin: "5%",
  },
}));

function TextEditor() {
  const classes = useStyles();
  const [text, setText] = useState("");
  return (
    <>
      <Container className={classes.header} xs={12}>
        Add New Learning Skills
      </Container>
      <Container className={classes.box}>
        <Divider className={classes.divider} />
        <CKEditor
          className={classes.editor1}
          // style={{ width: "50%" }}
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
      </Container>
    </>
  );
}

export default TextEditor;

// const TextEditor = () => {
//   const classes = useStyles();
//   const [text, setText] = useState("");
//   return (

//   );
// };
// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// // import "./../node_modules/react-quill/";
// import "./../../../node_modules/react-quill/dist/quill.snow.css";
// const TextEditor = () => {
//   const [body, setbody] = useState("");

//   const handleBody = (e) => {
//     console.log(e);
//     setbody(e);
//   };
//   return (
//     <div>
//       <ReactQuill />
//       modules={TextEditor.modules}
//       formats={TextEditor.formats}
//       onChange={handleBody}
//       value={body}
//     </div>
//   );
// };

// TextEditor.modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],

//     [{ size: [] }],

//     ["bold", "italic", "underline", "strike", "blockquote"],

//     [{ list: "ordered" }, { list: "bullet" }],

//     ["link", "image", "video"],

//     ["clean"],

//     ["code-block"],
//   ],
// };

// TextEditor.formats = [
//   "header",

//   "font",

//   "size",

//   "bold",

//   "italic",

//   "underline",

//   "strike",

//   "blockquote",

//   "list",

//   "bullet",

//   "link",

//   "image",

//   "video",

//   "code-block",
// ];

// export default TextEditor;
