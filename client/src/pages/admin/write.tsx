import React, { useState, useEffect, useRef } from "react";

function Editor() {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, Editor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div className="container">
      <div className="w-full h-full py-20">
        {editorLoaded ? (
          <CKEditor
            className="mt-3 wrap-ckeditor"
            editor={Editor}
            config={{ placeholder: "Tell your story" }}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log(editor.getData());
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
}

export default Editor;
