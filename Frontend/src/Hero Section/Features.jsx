import React from 'react'
import { BotMessageSquare, Download, LayoutTemplate, Gift} from 'lucide-react';

export default function Features() {
  
  
  return (
    <section id="features" className="max-w-screen-xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-200 text-indigo-700 text-sm font-medium">
          < Gift /> Easy to create,edit & share
          </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Showcase skill easily
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mx-auto mt-4">
          Our streamlined process helps you create a professional resume in minutes
          with intelligent AI-powered tools and features.
        </p>
      </div>
      <div className="mt-16 flex flex-col md:flex-row gap-2 items-center md:items-start">
        <div className="relative w-full md:w-1/2 flex justify-center itmes-center">
          <div className="absolute w-56 h-56 md:w-96 md:h-96 bg-purple-200 opacity-40 blur-3xl rounded-full" />
          <img
            src="../../public/istockphoto-1160018180-612x612.jpg"
            className="w-60 md:w-96 rounded-2xl shadow-xl border-4 border-white z-10 mb-8"
            alt="resume template"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-5 text-left">

          <div className="p-5 rounded-2xl border border-green-300 bg-green-50 flex gap-4 items-start hover:shadow-md hover:-translate-y-1 transition">
            <div className="rounded-xl bg-green-100 p-2">
              <LayoutTemplate className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Multiple Templates</h3>
              <p className="text-gray-600 text-sm mt-1">
                Choose from modern templates tailored for different roles and experience levels.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-yellow-300 bg-yellow-50 flex gap-4 items-start hover:shadow-md hover:-translate-y-1 transition">
            <div className="rounded-xl bg-yellow-100 p-2">
              <Download className="w-5 h-5 text-yellow-700" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Instant Download</h3>
              <p className="text-gray-600 text-sm mt-1">
                Get a clean, recruiter-ready PDF version of your resume in one click.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-sky-300 bg-sky-50 flex gap-4 items-start hover:shadow-md hover:-translate-y-1 transition">
            <div className="rounded-xl bg-sky-100 p-2">
              <BotMessageSquare className="w-5 h-5 text-sky-700" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">AI Improvements</h3>
              <p className="text-gray-600 text-sm mt-1">
                AI helps refine your wording, highlight key skills and add strong keywords.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}