import React from "react";
import { User,MapPinned,Phone,Mail,CircleUserRound,BriefcaseBusiness,Linkedin,CodeXml } from 'lucide-react';

export default function Personalinfo(){
  return (
    <div className="pt-4">
      <h1 className="font-medium text-lg">Personal Information</h1>
      <p className="text-gray-500">Get Started with personal information</p>
      <div className="pt-3 text-gray-600">
        <label className="flex gap-2 items-center text-lg text-gray-600"><User className="border border-gray-600 h-10 w-10 rounded-full p-2" />upload user image<input type="file" accept="image/*" className="hidden"/></label>
        <div className="pt-4">
        <label className="flex gap-2 items-center pb-2 font-bold text-sm"><CircleUserRound size={18}/>Full Name</label>
        <input type="text" placeholder="Enter your full name" className="border-gray-300 rounded-md h-9 w-full placeholder:text-gray-400 placeholder:text-sm"></input>
        </div>
        <div className="pt-4">
        <label className="flex gap-2 items-center pb-2 font-bold text-sm"><Mail size={18}/>Email Address</label>
        <input type="email" placeholder="Enter your email address" className="border-gray-300 rounded-md h-9 w-full placeholder:text-gray-400 placeholder:text-sm"></input>
        </div>
        <div className="pt-4">
        <label className="flex gap-2 items-center pb-2 font-bold text-sm"><Phone size={18}/>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" className="border-gray-300 rounded-md h-9 w-full placeholder:text-gray-400 placeholder:text-sm"></input>
        </div>
        <div className="pt-4">
        <label className="flex gap-2 items-center pb-2 font-bold text-sm"><MapPinned size={18}/>Location</label>
        <input type="text" placeholder="Enter your location" className="border-gray-300 rounded-md h-9 w-full placeholder:text-gray-400 placeholder:text-sm"></input>
        </div>
        <div className="pt-4">
        <label className="flex gap-2 items-center pb-2 font-bold text-sm"><BriefcaseBusiness size={18}/>Profession</label>
        <input type="text" placeholder="Enter your profession" className="border-gray-300 rounded-md h-9 w-full placeholder:text-gray-400 placeholder:text-sm"></input>
        </div>
        <div className="pt-4">
        <label className="flex gap-2 items-center pb-2 font-bold text-sm"><Linkedin size={18}/>Linkedin Profile</label>
        <input type="url" placeholder="Enter your linkedin profile link" className="border-gray-300 rounded-md h-9 w-full placeholder:text-gray-400 placeholder:text-sm"></input>
        </div>
        <div className="pt-4">
        <label className="flex gap-2 items-center pb-2 font-bold text-sm"><CodeXml size={18}/>Personal Website or Portfolio</label>
        <input type="text" placeholder="Enter your website or portfolio link" className="border-gray-300 rounded-md h-9 w-full placeholder:text-gray-400 placeholder:text-sm"></input>
        </div>
      </div>
    </div>
  );
}
