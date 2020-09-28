import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import CodePreview from "./CodePreview";

interface CodeEditorProps {}

function CodeEditor({}: CodeEditorProps) {
  const [code, setCode] = useState<string>(`function component () {
  return (
    <h3>
      So functional. Much wow!
    </h3>
  )
}`);
  const [editor, setEditor] = useState<any>(null);

  function editorDidMount(editor: any, monaco: any) {
    setEditor(editor);
  }

  const options = {};

  return (
    <><MonacoEditor
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={(newValue, e) => {
        setCode(newValue);
      } }
      editorDidMount={editorDidMount} />
      <CodePreview code={code}/></>
  );
}

export default CodeEditor;
