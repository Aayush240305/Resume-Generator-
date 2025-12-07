import React from "react";
import {Plus,CodeXml} from 'lucide-react'

export default function Project() {
  return (
  <div className="pt-4">
    <div className="flex justify-between">
      <div>
     <h1 className="font-medium text-lg">Project</h1>
      <p className="text-gray-500">Add your projects here...</p>
      </div>
      <button className="flex items-center justify-center bg-purple-500 text-white gap-2 h-12 rounded-lg px-3"> Add Project <Plus /></button>
    </div>
    <div className="flex flex-col justify-center items-center text-gray-500 pt-8 pb-8">
  <CodeXml size={48} className="text-gray-400 mb-4"/>
  <p>No projects added yet.</p>
  <p>Get started with "Add Project"..</p>
  </div> 
        <div className="text-sm bg-violet-100 rounded-md p-3 mt-4">
        <p className="text-violet-900"><span className="text-violet-900 font-bold">Tip : </span>Add 2–4 key projects with title, technology stack, short description, and your role or contribution.</p>
      </div>
  </div>
  );
}
