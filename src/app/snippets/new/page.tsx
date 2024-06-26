'use client';

import { createSnippet } from '@/actions';
import { useFormState } from 'react-dom';

const SnippetsCreatePage = () => {
  const [formState, action] = useFormState(createSnippet, { message: '' });

  return (
    <form
      action={action}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-7 mb-4 w-3/4 flex flex-col justify-center m-auto"
    >
      <h3 className="font-bold  m-auto">Create a Snippet</h3>
      <div className="flex flex-col gap-4 mt-5 ">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400 ">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" className="rounded p-2 bg-blue-200 ">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetsCreatePage;
