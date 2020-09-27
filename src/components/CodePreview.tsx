import React from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";

interface CodePreviewProps {
  code: string;
}

const CodePreview = ({ code }: CodePreviewProps) => {
  return (
    <LiveProvider code={code}>
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default CodePreview;
