import React, {useState} from 'react';
import MonacoEditor from 'react-monaco-editor';

interface CodeEditorProps {

}

function CodeEditor({}: CodeEditorProps) {
    const [code, setCode] = useState<string>("");
    const [editor, setEditor] = useState<any>(null);

    function editorDidMount(editor: any, monaco: any) {
        setEditor(editor);
    }

    const options = {

    }
    
    return (
        <MonacoEditor
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={(newValue, e)=>setCode(newValue)}
            editorDidMount={editorDidMount}
        />
    );
}

export default CodeEditor;