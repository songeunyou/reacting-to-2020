import React, { useRef, useState } from "react";
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  withLive,
} from "react-live";
import { Question } from "../objects/Questions";

import "./CodeEditor.scss";

interface CodeEditorProps {
  question: Question,
  gotoNextQuestion: Function
}

function CodeEditor({ question, gotoNextQuestion }: CodeEditorProps) {
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

  const handleSubmit = (event: React.FormEvent) => {
    // check if answer is correct
    event.preventDefault();

    let condensedCode = document.getElementById("editor")?.firstChild?.firstChild?.textContent?.replace(/\s+/g, '') || "";
    console.log(container.current?.children[0].innerHTML);

    // check to see if code contains all the strings specified in question.answerStrings
    if(question.answerStrings) {
      for(const s of question.answerStrings) {
        if(!condensedCode.includes(s.replace(/\s+/g, ''))) {
          setResult(false);
          return;
        }
      }
    }

    if(!container.current?.children[0].innerHTML.includes(question.answerHTML || "")) {
      setResult(false);
      return false;
    }

    // tests passed
    setResult(true);
    gotoNextQuestion();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>  
        <LiveProvider noInline={true} code={code}>
          <div id="editor" className="editor" ref={editor}>
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
