import React, { useState, useEffect, useRef } from "react";

function Editor() {
  const [ckdata, setCkData] = useState("");
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

  const editorConfiguration = {
    placeholder: "Type the content here!",
    language: "en",
    licenseKey: "",
  };

  return (
    <div className="container">
      <div className="w-full h-full py-20 px-40">
        <div className="mb-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Input title here.."
            className="placeholder:italic py-4 font-semibold rounded text-3xl w-full focus:outline-none"
          />
        </div>
        {editorLoaded ? (
          <CKEditor
            className="mt-3 wrap-ckeditor text-xl"
            editor={Editor}
            config={editorConfiguration}
            onChange={(event, editor) => {
              const data = editor.getData();
              setCkData(data);
            }}
          />
        ) : (
          "loading..."
        )}
        <div className="submit-button">
          <button
            className="py-2 px-5 border-none bg-slate-500 text-white rounded-lg mt-4"
            onClick={() => {
              console.log(ckdata);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
