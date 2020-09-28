import React, { useRef, useState } from "react";
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  withLive,
} from "react-live";

import "./CodeEditor.scss";

interface CodeEditorProps {
  question: number,
  answer: string
}

function CodeEditor(props: CodeEditorProps) {
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
  const [result, setResult] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);
  const editor = useRef<HTMLDivElement>(null);

  console.log(props)
  console.log(editor)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    setResult(
      container.current?.children[0].innerHTML.includes("<h3>WE DID IT</h3>") ||
        false
    );
    console.log(
      container.current?.children[0].innerHTML.includes("<h3>WE DID IT</h3>")
    );
    event?.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>  
        <LiveProvider transformCode={(code) => {setCode(code); return code}} noInline={true} code={code}>
          <div className="editor" ref={editor}>
            <LiveEditor />
          </div>
          <div className="error">
            <LiveError />
          </div>
          <div className="display" ref={container}>
            <LivePreview />
          </div>
        </LiveProvider>
        <input type="submit" value="Submit" />
      </form>
      {result ? <h1> Correct Answer </h1> : <h1>Wrong Answer</h1>}
    </>
  );
}

export default withLive(CodeEditor);
