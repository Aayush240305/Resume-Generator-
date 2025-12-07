import React from "react";
import {Plus,GraduationCap} from 'lucide-react'

export default function Education(){
  return (
    <div className="pt-4">
    <div className="flex justify-between">
      <div>
     <h1 className="font-medium text-lg">Education</h1>
      <p className="text-gray-500">Add your education details here...</p>
      </div>
      <button className="flex items-center justify-center bg-purple-500 text-white gap-2 h-12 rounded-lg px-3"> Add Education <Plus /></button>
    </div>
    <div className="flex flex-col justify-center items-center text-gray-500 pt-8 pb-8">
  <GraduationCap size={48} className="text-gray-400 mb-4"/>
  <p>No education added yet.</p>
  <p>Get started with "Add Education".</p>
  </div> 
        <div className="text-sm bg-violet-100 rounded-md p-3 mt-4">
        <p className="text-violet-900"><span className="text-violet-900 font-bold">Tip : </span>Add your latest education first, including degree, institute name, and year of completion.</p>
      </div>
  </div>
  );
}
