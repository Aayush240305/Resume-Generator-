import React from "react";

export default function Summary() {
  return (
    <div className="pt-4">
      <h1 className="font-medium text-lg">Professional Summary</h1>
      <p className="text-gray-500">Summarize your profession in consisely (2-3 lines)</p>
  <textarea id="message" rows="6" class=" mt-4 bg-neutral-secondary-medium border border-gray-300 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-5 shadow-xs  placeholder:text-gray-500" placeholder="Write your summary which highlights your professional journey and skill..."></textarea>

    </div>
  );
}
