import React, { useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const MyEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(''))
  );

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
    />
  );
};
export default MyEditor;