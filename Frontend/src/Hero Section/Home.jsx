import React from 'react'

export default function Home(){
  return(
      <section id="home" className="flex  items-center flex-col mt-32 py-18">
    <div className="flex gap-2 justify-center">
    <div className="flex -space-x-4 rtl:space-x-reverse">
    <img className="w-9 h-9 border-2 border-buffer rounded-full" src="../../public/image/woman-avatar-profile-icon-vector-illustration_874723-207.jpg" alt=""/>
    <img className="w-9 h-9 border-2 border-buffer rounded-full" src="../../public/image/male-portrait-people-profile-perfect-for-social-media-and-business-presentations-user-interface-ux-graphic-and-web-design-applications-and-interfaces-illustration-vector.jpg" alt=""/>
    <img className="w-9 h-9 border-2 border-buffer rounded-full" src="../../public/image/business-man-avatar-profile_1133257-2431.jpg" alt=""/>
    <img className="w-9 h-9 border-2 border-buffer rounded-full" src="../../public/image/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" alt=""/>
    <img className="w-9 h-9 border-2 border-buffer rounded-full" src="../../public/image/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-free-vector.jpg" alt=""/>
</div>
    <div>
    <div className="flex items-center space-x-1">
    <svg className="w-5 h-5 text-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
</div>
        <p className="text-l">Trusted by 10,000 + users</p>
    </div>
</div>
  <div className="m-8 max-w-3xl">
     <h1 className="text-5xl font-semibold text-center font-sans drop-shadow-[0_4px_20px_rgba(120,80,255,0.35)]">
  Build your <span className="text-brand">resume</span>, unlock your future
</h1>
      <p className="text-center  text-gray-500 pt-5 text-lg md:text-xl md:pr-28 md:pl-28">Create, customize, and download a job-cracking resume — all in one place, with assistance of AI.</p>
  </div>
  <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
Get Started
<svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</button>
< hr />
      </section>
    )
}