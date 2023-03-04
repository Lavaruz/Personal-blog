import React, { useState, useEffect, useRef } from "react";

function Editor() {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClasicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClasicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div className="container">
      <div className="w-full h-full py-20 px-20">
        <div className="mb-10">
          <input
            type="text"
            name=""
            id=""
            placeholder="Input title here.."
            className="placeholder:italic p-4 rounded text-xl w-full focus:border-slate-300 focus:ring-slate-300"
          />
        </div>
        {editorLoaded ? (
          <CKEditor
            className="mt-3 wrap-ckeditor text-xl"
            editor={ClasicEditor}
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
