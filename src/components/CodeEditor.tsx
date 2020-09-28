import React, { useRef, useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider, withLive } from "react-live";

import './CodeEditor.scss';

interface CodeEditorProps {
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

  const container = useRef<HTMLDivElement>(null);
  console.log(container.current?.children[0].innerHTML === "<div><h3>WE DID IT</h3></div>");
  console.log(container.current?.children[0].innerHTML)

  console.log(props);

  return (
    <LiveProvider noInline={true} code={code}>
      <div className="editor">
          <LiveEditor />
      </div>
      <div className="error">
        <LiveError />
      </div>
      <div className="display" ref={container}>
        <LivePreview />
      </div>
    </LiveProvider>
  );
}

export default withLive(CodeEditor);
