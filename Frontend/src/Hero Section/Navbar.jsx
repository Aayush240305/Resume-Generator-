import { useState } from 'react'
import logo from '../../public/1000213365-removebg-preview.png'
import {Link} from "react-router-dom"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <nav className="bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] w-full z-50 top-0 start-0 border-b border-default fixed ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 relative">
            <img src={logo} className="h-16 m-0" alt="Logo" />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/signup"><button
              type="button"
              className="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
            >
              Get started
            </button>
</Link>
            <button
              type="button"
              onClick={() => setIsOpen(prev => !prev)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>

          <div
            className={`
    md:flex md:w-auto md:order-1
    ${isOpen ? 'block' : 'hidden'} md:block
    absolute md:static top-full left-0 w-full
  `}
          >
            <ul className={`flex flex-col w-full p-4 md:p-0 md:mt-4 font-medium border border-default  md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary ${isOpen ? "bg-white":""}`}>
              <li>
                <a href="#home" className="w-full block py-2 px-3 text-heading
                hover:text-white rounded hover:bg-brand md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0">Home</a>
              </li>
              <li>
                <a href="#features" className="w-full block py-2 px-3 text-heading
                hover:text-white rounded hover:bg-brand md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0">Features</a>
              </li>
              <li>
                <a href="#testimonial" className="w-full block py-2 px-3 text-heading rounded hover:bg-brand hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="w-full block py-2 px-3 text-heading rounded hover:bg-brand hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar