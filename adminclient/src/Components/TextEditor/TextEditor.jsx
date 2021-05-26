import React, { useState } from 'react'
import { Editor as MainEditor} from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextEditor() {
    const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
    return (
        <div className="editor__wrapper">
            <h1 className="editor__title">Add Content</h1>
            <MainEditor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbarClassName="toolbar"
                wrapperClassName="wrapper"
                editorClassName="editor"
            />
            <div className="btn__box">
                <button type="button">Add Activity</button>
            </div>
        </div>
    )
}
export default TextEditor;