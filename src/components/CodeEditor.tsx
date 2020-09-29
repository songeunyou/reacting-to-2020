import React, { useEffect, useRef, useState } from "react";
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
} from "react-live";
import { Question } from "../objects/Questions";

import "./CodeEditor.scss";

interface CodeEditorProps {
  question: Question,
}

function CodeEditor({ question }: CodeEditorProps) {
  const [code, setCode] = useState<string>(
    `function Component () {
  return (
    <h3>
      So functional. Much wow!
    </h3>
  )
}

render(
  <Component />
)`
  );

  useEffect(() => {
    // if a new question appears, update starter code
    setCode(question.starterCode);
  }, [question])


  return (
    <LiveProvider noInline={true} code={code}>
      <div id="editor" className="editor">
        <LiveEditor />
      </div>
      <div className="error">
        <LiveError />
      </div>
      <div id="result" className="display">
        <LivePreview />
      </div>
    </LiveProvider>
  );
}

export default CodeEditor;
