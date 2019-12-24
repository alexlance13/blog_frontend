import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import './react-draft.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import classes from './Editor.module.css';
import { imageUpload } from '../../store/actions/posts';

const TextEditor = (props) => {
  const [model, setModel] = useState('');

  useEffect(() => {
    const contentBlock = htmlToDraft(props.body);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    setModel(editorState);
  }, [props.body]);

  async function onImageUploadHandler(file) {
    const res = await imageUpload(file, props.token);
    return { data: { link: res.data.src } };
  }

  function onEditorStateChange(editorState) {
    setModel(editorState);
    props.onChangeHandler('text', draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }
  return (
    <Editor
      onBlur={props.onBlurHandler}
      editorState={model}
      toolbar={{
        image: {
          alignmentEnabled: false,
          uploadEnabled: true,
          uploadCallback: (data) => onImageUploadHandler(data),
          inputAccept: 'image/jpeg,image/jpg,image/png',
          previewImage: true,
        },
        fontSize: {
          options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36],
        },
      }}
      wrapperClassName={classes.wrapperClassName}
      editorClassName={classes.editorClassName}
      onEditorStateChange={onEditorStateChange}
      uploadEnabled={true}
    />
  );
};

export default TextEditor;
