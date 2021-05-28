import React, { useRef, useState } from 'react'
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.scss'

const formats = [
    "background",
    'bold',
    'color',
    'font',
    'code',
    'italic',
    'link' ,
    'size',
    'strike',
    'script',
    'underline',
    'blockquote',
    'header',
    'align',
    'direction',
    'image',
    'video',
    'code-block',
]

const modules = {
    toolbar : ".toolBar",
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ]
}

function Editor({withoutButton, withoutTitle, styles}) {

    return (
        <div className="editor__wrapper" style={styles}>
            {!withoutTitle && <h1 className="editor__title">Add Content</h1>}
            <ReactQuill
                className="toolBar"
                theme="snow"
                placeholder="Add Content here..."
                formats={formats}
                modules={modules}
            />
            {!withoutButton && <div className="btn__box">
                <button type="button">Add Activity</button>
            </div>}
        </div>
    )
}
export default Editor
