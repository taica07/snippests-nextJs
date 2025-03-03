'use client';
import { editSnippet } from '@/actions';
import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { useState } from 'react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = '') {
    setCode(value);
    console.log(value);
  }
  //Option 1 (even user isn't running javascript in their browser) :
  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  //Option 2 (no messing around with bind function and is closer to React behavior , but can be use only in server component)

  // const editSnippetAction = async () => {
  //   await editSnippet(snippet.id, code);
  // };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
