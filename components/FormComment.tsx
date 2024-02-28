"use client";

import { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comment, setCommit] = useState<string>("");

  const handleCommitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommit(e.target.value);
  };

  const handleSubmitComment = () => {
    console.log(comment);
  };
  return (
    <div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Add Comment
        </label>

        <input
          type="text"
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          name="comment"
          value={comment}
          onChange={handleCommitChange}
        />

        <button
          onClick={handleSubmitComment}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormComment;
