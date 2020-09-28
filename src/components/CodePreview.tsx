import React, { useRef } from "react";
import { LiveProvider, LiveError, LivePreview} from "react-live";

interface CodePreviewProps {
  code: string;
  element?: React.FC
}

const CodePreview = (props: CodePreviewProps) => {
  const container = useRef<HTMLDivElement>(null);
  console.log(props.code)
  console.log(container.current?.innerHTML === "<div><h3>WE DID IT</h3></div>");
  console.log(container.current?.innerHTML)

  return (
    <LiveProvider code={props.code}>
      <LiveError />
      <div ref={container}>
        <LivePreview />
      </div>
    </LiveProvider>
  );
};

export default CodePreview;
