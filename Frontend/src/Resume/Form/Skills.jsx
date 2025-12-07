import React,{useState} from "react"
import {Plus,Sparkles,X} from 'lucide-react'

export default function Skills() {
  
  const[skills, setSkills] = useState([]);
  const[title, setTitle] = useState("");
  
  function handleClick(){
    if(!title) return;
    setSkills((prev) => [...prev, title])
    setTitle("")
  }
  
  function removeSkill(indexToRemove){
    setSkills((prev) => prev.filter((_,index)=> index !== indexToRemove))
  }
  
  return (
    <div className="pt-4">
     <h1 className="font-medium text-lg">Skills</h1>
      <p className="text-gray-500">Add your techinical, professional and soft skills.</p>
      <form className="flex h-12 w-full max-w-md items-center gap-2 overflow-hidden rounded-md border border-gray-500/30 bg-white mt-2">
            <input type="text" placeholder="Enter a skill (eg. javascript, python, etc)" className="h-full bg-transparent w-full pl-4 text-sm placeholder-gray-500 outline-none border-none" required value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
            <button type="button" className="mr-1 h-10 w-56 rounded-md bg-purple-500 text-sm text-white transition active:scale-95 flex items-center justify-center gap-2 " onClick={handleClick}>Add Skill  <Plus /></button>
        </form>
       {skills.length === 0 ? <div className="flex flex-col justify-center items-center text-gray-500 pt-8 pb-8">
  <Sparkles size={48} className="text-gray-400 mb-4"/>
  <p>No skills added yet.</p>
  <p>Add your skills from the bar above.</p>
  </div> : <div className="flex flex-wrap gap-3 pt-4">
    {
      skills.map((title,index)=>{
        return(
        <div key={index} className="flex items-center justify-between text-sm bg-violet-100 rounded-full py-1.5 px-4 text-violet-900 gap-1">
          <p>{title}</p>
          <button type="button" onClick={()=>{removeSkill(index)}}><X size={18}/></button>
        </div>
        )
      })
    }
  </div>} 
      <div className="text-sm bg-violet-100 rounded-md p-3 mt-4">
        <p className="text-violet-900"><span className="text-violet-900 font-bold">Tip : </span>List 8–12 relevant skills, combining both technical competencies (languages, tools, frameworks) and soft skills such as communication, teamwork, and leadership.</p>
      </div>
    </div>
  );
}
