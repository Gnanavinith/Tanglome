import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Our Team | Tanglome - No 1 IT Company in India & Tamil Nadu | Meet Our Experts</title>
        <meta name="description" content="Meet the talented team behind Tanglome - No 1 IT Company in India & Tamil Nadu. Our experts in web development, mobile apps, AI solutions, cloud services, and digital marketing are dedicated to delivering exceptional results." />
        <meta name="keywords" content="Tanglome team, Tanglome experts, Tanglome developers, Tanglome designers, Tanglome digital marketing team, Tanglome AI team, Tanglome cloud team, web development team India, mobile app developers India, AI development team India, cloud services team India, digital marketing team India, software development team India, IT consultants India, software engineers India, full stack developers India, front end developers India, back end developers India, UI UX designers India, SEO specialists India, digital marketing experts India, AI engineers India, cloud architects India, DevOps engineers India, software architects India, project managers India, IT professionals India, tech team India, software development team Tamil Nadu, web designers India, mobile app development team, AI specialists India, machine learning engineers India, data scientists India, software consultants India, technology team India, IT company team India, Tanglome staff, Tanglome employees" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanglome.com/team" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">Meet the talented professionals dedicated to delivering exceptional results</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                TS
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Team Specialist</h3>
              <p className="text-slate-600 mb-4">Web Development</p>
              <div className="flex justify-center gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Node.js</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                ME
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Marketing Expert</h3>
              <p className="text-slate-600 mb-4">Digital Marketing</p>
              <div className="flex justify-center gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">SEO</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">PPC</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                DS
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Designer Specialist</h3>
              <p className="text-slate-600 mb-4">UI/UX Design</p>
              <div className="flex justify-center gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Figma</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Adobe XD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
