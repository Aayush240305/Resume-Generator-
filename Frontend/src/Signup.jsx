import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import axios from 'axios'

export default function Signup() {
  const navigate = useNavigate();
  const[email, setEmail] = useState("");
  const[fullName, setFullName] = useState("");
  const[password, setPassword] = useState("");
  
  async function handleSubmit(e){
    e.preventDefault();
    
    try{
      const res = await axios.post('/resume/api/v1/user/register',{
        fullName, email, password
      });
      toast.success("User created successfully!");
      navigate('/login');
    }catch(err){
      if (err?.response?.status === 401) {
        toast.error("User already exists");
        navigate('/login');
      } else {
        toast.error(`Something went wrong ${err}`);
      }
    }
  }
  return (
  <div className=" h-screen flex justify-center items-center">
    <form onSubmit={handleSubmit}
      className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
    >
      <h1 className="text-gray-900 text-3xl mt-10 font-medium">Sign up</h1>
      <p className="text-gray-500 text-sm mt-2">
        Please create an account to continue
      </p>

      <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-user-round-icon lucide-user-round"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
        <input
          type="text"
          name="fullName"
          placeholder=" Full Name"
          className="border-none outline-none ring-0"
          required
          value={fullName}
          onChange={(e)=>{
            setFullName(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-mail-icon lucide-mail"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="border-none outline-none ring-0"
          required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-lock-icon lucide-lock"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-none outline-none ring-0"
          required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
      >
        Sign up
      </button>

      <p className="text-gray-500 text-sm mt-3 mb-11">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-500 hover:underline">
          click here
        </Link>
      </p>
    </form>
  </div>
  );
}