import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import classes from "./Editor.module.css";
import axios from "../../axios";

const TextEditor = props => {
  const [model, setModel] = useState("");

  useEffect(() => {
    const contentBlock = htmlToDraft(props.body);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    setModel(editorState);
  }, []);

  async function onImageUpload(file) {
    const data = new FormData();
    data.append("pics", file);
    const config = {
      headers: {
        authorization: `Bearer ${props.token}`
      }
    };
    const res = await axios.post("/upload", data, config);
    return { data: { link: res.data.src } };
  }

  function onEditorStateChange(editorState) {
    setModel(editorState);
    props.onChangeHandler(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }
  return (
    <Editor
      editorState={model}
      toolbar={{
        image: {
          defaultSize: { width: "78vh" },
          alignmentEnabled: false,
          uploadEnabled: true,
          uploadCallback: data => onImageUpload(data),
          inputAccept: "image/jpeg,image/jpg,image/png",
          previewImage: true
        },
        fontSize: {
          options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36]
        }
      }}
      wrapperClassName={classes.wrapperClassName}
      editorClassName={classes.editorClassName}
      onEditorStateChange={onEditorStateChange}
      uploadEnabled={true}
    />
  );
};

export default TextEditor;
