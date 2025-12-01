import React from 'react'
import { LogOut } from 'lucide-react';
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

export default function Navbar({name}){
  
  const navigate = useNavigate();
  
async function logout(){
    try{
     const res = await axios.post('/resume/api/v1/user/logout',{ withCredentials: true }); 
      toast.success("User logout successfully");
      navigate('/home');
    }catch(err){
     toast.error("Something went wrong",err); 
    }
  }

  return(
    <>
      <nav className="bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] w-full z-50 top-0 start-0 border-b border-default fixed flex items-center justify-between">
        <img src="../../public/1000213365-removebg-preview.png" className="h-16 ">
        </img>
        <div className="flex items-center gap-4 p-1">
        <p className="font-medium text-gray-700">Hello, {name? name.split(" ")[0] : " "}</p>
        <button 
          type="button" 
          className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 border border-gray-400 rounded-lg bg-white hover:bg-pink-100 hover:text-pink-700 hover:border-pink-500 active:scale-95 transition shadow-sm"
          onClick={logout}
        >
          <LogOut size={18} />
          Logout
        </button>
        </div>
      </nav>
    </>
    
    )
}