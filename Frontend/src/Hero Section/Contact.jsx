import React from 'react'
import { Facebook,Instagram,Linkedin,Twitter,Github,Youtube,Phone,Mail } from 'lucide-react'
export default function Contact() {
    return (
        <footer id="contact" className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
                <div className="flex items-center  mb-2">
                  <a href="#home">
                    <img alt="" className="h-24"
                        src="../../public/1000213365-removebg-preview.png" />
                  </a>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Your skills tell a story, make it unforgettable.
A better resume is the start of a better future.
                </p>
            </div>
            <div>
            <p className="font-bold text-center pb-4">Get in touch</p>
            <div className="flex  justify-center gap-4">
              <p className="flex gap-2"><Phone className="text-brand"/> +91-8907897565</p>
              <p className="flex gap-2"><Mail className="text-brand"/> resume@gmail.com</p>
            </div>
            <div className="flex gap-3 pt-4 pb-4 justify-center">
              <a href="#">
                <Facebook className="text-brand"/>
              </a>
              <a href="#">
                <Instagram className="text-brand"/>
              </a>
              <a href="#">
                <Linkedin className="text-brand"/>
              </a>
                <a href="#">
                <Twitter className="text-brand"/>
              </a>
              <a href="#">
                <Github className="text-brand"/>
              </a>
              <a href="#">
                <Youtube className="text-brand"/>
              </a>
            </div>
          </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="#home">resume</a>©2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};