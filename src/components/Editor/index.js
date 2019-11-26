import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import classes from "./Editor.module.css";

const TextEditor = props => {
  const [model, setModel] = useState("");

  useEffect(() => {
    const contentBlock = htmlToDraft(props.body);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    setModel(editorState);
  }, []);

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
          uploadCallback: e => console.log(e)
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
