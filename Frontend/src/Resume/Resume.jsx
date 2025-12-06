import React, { useState } from "react";
import Navbar from "../Dashboard/Navbar.jsx";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  LayoutPanelTop,
  PaintBucket,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Personalinfo from "./Form/Personalinfo.jsx";
import Summary from "./Form/Summary.jsx";
import Experience from "./Form/Experience.jsx";
import Project from "./Form/Project.jsx";
import Education from "./Form/Experience.jsx";
import Skills from "./Form/Skills.jsx";

export default function Resume() {
  const { slug } = useParams();
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState(0);
  const [input,setInput] = useState("");

  const sections = [
    { id: 0, component: <Personalinfo setInput={setInput}/>  },
    { id: 1, component: <Summary /> },
    { id: 2, component: <Experience /> },
    { id: 3, component: <Education /> },
    { id: 4, component: <Project /> },
    { id: 5, component: <Skills /> },
  ];

  function handlePrev() {
    if (state > 0) {
      setState((prev) => prev - 1);
      setProgress((prev) => prev - 20);
    }
  }

  function handleNext() {
    if (state < sections.length - 1) {
      setState((prev) => prev + 1);
      setProgress((prev) => prev + 20);
    }
  }

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <h1 className="pt-20 m-3 text-gray-500 text-lg">
        <Link to="/" className="flex gap-2 items-center">
          <ArrowLeft />
          Back to Dashboard
        </Link>
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Form */}
        <div className="m-3 rounded-lg flex-1 order-1 md:order-none bg-white">
          <div className="w-full bg-gray-200 h-1">
            <div
              className="bg-purple-600 h-1 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="m-4">
            <div className="flex justify-between p-2 border-b-2">
              <div className="flex gap-3">
                <button className="bg-cyan-100 p-2 text-cyan-700 rounded">
                  <LayoutPanelTop size={18} />
                </button>
                <button className="bg-yellow-100 p-2 text-yellow-700 rounded">
                  <PaintBucket size={18} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 text-gray-600">
                <button
                  className="flex items-center gap-2 disabled:hidden"
                  disabled={state === 0}
                  onClick={handlePrev}
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <button
                  className="flex items-center gap-2 disabled:opacity-20"
                  disabled={state === sections.length - 1}
                  onClick={handleNext}
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="border-b-2 pt-2 pb-2">
              {sections[state].component}
            </div>
            <div>
              <button type="button" className="px-6 py-2.5 active:scale-95 transition bg-purple-300 rounded text-purple-700 shadow-lg shadow-purple-500/30 text-sm font-medium border-purple-700 border mt-4">Save Changes</button>
            </div>
          </div>
        </div>
        {/* Preview */}
        <div className="flex-1 order-1 md:order-none">
          <h1>{input}</h1>
        </div>
      </div>
    </div>
  );
}