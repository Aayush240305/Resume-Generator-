import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {Plus, X,UserPen} from 'lucide-react';

export default function Dashboard(){
const navigate = useNavigate();
const[data, setData ] = useState({});
const[show, setShow] = useState(false);
const[title, setTitle] = useState("");
const[resumes, setResumes] = useState([]);


const colorClasses = [
  { border: "border-red-300", bg: "bg-red-50", text: "text-red-700" },
  { border: "border-blue-300", bg: "bg-blue-50", text: "text-blue-700" },
  { border: "border-green-300", bg: "bg-green-50", text: "text-green-700" },
  { border: "border-purple-300", bg: "bg-purple-50", text: "text-purple-700" },
  { border: "border-pink-300", bg: "bg-pink-50", text: "text-pink-700" },
  { border: "border-yellow-300", bg: "bg-yellow-50", text: "text-yellow-700" },
  { border: "border-indigo-300", bg: "bg-indigo-50", text: "text-indigo-700" },
  { border: "border-cyan-300", bg: "bg-cyan-50", text: "text-cyan-700" },
  { border: "border-rose-300", bg: "bg-rose-50", text: "text-rose-700" },
  { border: "border-amber-300", bg: "bg-amber-50", text: "text-amber-700" },
  { border: "border-emerald-300", bg: "bg-emerald-50", text: "text-emerald-700" },
  { border: "border-orange-300", bg: "bg-orange-50", text: "text-orange-700" },
  { border: "border-slate-300", bg: "bg-slate-50", text: "text-slate-700" },
  { border: "border-teal-300", bg: "bg-teal-50", text: "text-teal-700" },
  { border: "border-lime-300", bg: "bg-lime-50", text: "text-lime-700" },
  { border: "border-violet-300", bg: "bg-violet-50", text: "text-violet-700" },
  { border: "border-fuchsia-300", bg: "bg-fuchsia-50", text: "text-fuchsia-700" },
  { border: "border-neutral-300", bg: "bg-neutral-50", text: "text-neutral-700" },
  { border: "border-sky-300", bg: "bg-sky-50", text: "text-sky-700" },
];


useEffect(()=>{
  async function fetchUser(){
    try{
    const res = await axios.get('/resume/api/v1/user/user');
    setData(res.data.data)
  }catch(err){
    navigate('/home')
  }
}
fetchUser()
},[])

function handleSubmit(e){
  e.preventDefault();
  setResumes((prev)=>[...prev, title])
  setShow(false)
  setTitle("")
}

return(
  <>
    <Navbar name={data.fullName}/>
      <div className="pt-20 flex justify-center border-bottom">
     <button className="w-[95vw]" onClick={()=>{
       setShow(true)
     }}>
     <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-purple-50 to-purple-200 p-16 rounded-2xl border border-purple-300 cursor-pointer">
    <div className="bg-purple-600 flex h-12 w-12 rounded-full text-white items-center justify-center">
      <Plus size={28}/>
    </div>
    <p className="text-purple-700 text-lg font-semibold tracking-wide">Create Resume</p>
  </div>
</button>
      </div>
      {show && <div className="h-screen w-screen bg-black/50 flex justify-center items-center fixed inset-0 "><form className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-lg shadow-lg " onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-3 ">
            <h2 className="text-2xl font-semibold text-gray-600">Create A Resume</h2>
            <button type="button" onClick={()=>{
              setShow(false)
            }}><X /></button>
        </div>
            <input id="text" className="w-full border mt-1 border-gray-500/30 outline-none rounded p-2" type="text" placeholder="Enter your resume title" value={title} required onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
            <button type="submit" className="w-full my-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded text-white">Create Resume</button>
        </form></div>}
      <div className="flex justify-center items-center">
        <div className="m-4 grid gap-2 grid-cols-2 md:grid-cols-6 w-[94vw] ">
          {
            resumes.map((resume,index)=>{
            const random = colorClasses[Math.floor(Math.random() * colorClasses.length)];
              return(
               <div
  key={index}
  className={`flex flex-col justify-center items-center border-2 ${random.border} ${random.bg} w-40 md:w-36 h-48 rounded-lg`}
>
  <UserPen className={`${random.text}`} />
  <p className="text-gray-700">{resume}</p>
</div>
              )
            })
          }
        </div>
      </div>
    </>
    )
}