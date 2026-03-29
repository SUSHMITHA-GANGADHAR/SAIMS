import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import heroImg from '../assets/student_hero.png';
import profImg from '../assets/professional_workspace.png';

function Landing() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-gray-900 overflow-x-hidden selection:bg-emerald-100">
      <Header />
      
      {/* 1. Hero Section - Full Background Visual */}
      <section className="relative min-h-screen flex items-center justify-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Academy Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-indigo-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 space-y-10 animate-fadeIn text-center md:text-left text-white font-sans">
            <div className="inline-block px-5 py-2 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-500/30 text-xs font-black uppercase tracking-[0.2em] text-emerald-400 shadow-2xl">
              Ethnotech Evolution
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] drop-shadow-2xl">
               Architect The <br />
               Future.
            </h1>
            <p className="text-xl md:text-2xl text-indigo-50 font-medium max-w-xl leading-relaxed opacity-90 italic">
              Empowering students with industry-standard assignment mastery and direct gateways to elite internships.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center md:justify-start pt-4 font-sans">
              <Link
                to="/register"
                className="group relative px-10 py-5 bg-emerald-500 text-white font-black rounded-2xl shadow-2xl hover:bg-emerald-400 transition-all duration-500 hover:scale-105 transform"
              >
                Apply Now
              </Link>
              <Link
                to="/login"
                className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white font-black rounded-2xl hover:bg-white/20 transition-all shadow-xl"
              >
                Entrance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us Section with Professional Workspace Image */}
      <section id="about" className="py-32 px-8 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -z-0 transform skew-x-12 opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
             <div className="relative p-3 bg-white rounded-[50px] shadow-3xl border border-gray-100 overflow-hidden group">
                <img src={profImg} alt="Professional Academy" className="w-full h-[600px] object-cover rounded-[40px] group-hover:scale-110 transition duration-1000" />
                <div className="absolute inset-0 bg-indigo-600/5 transition duration-700"></div>
                {/* Removed name/overlaid text as requested */}
             </div>
          </div>
          <div className="md:w-1/2 space-y-10 text-center md:text-left font-sans">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-600">Our Essence</h2>
            <h3 className="text-6xl font-black text-gray-900 tracking-tighter leading-none">Engineering Impact across borders.</h3>
            <p className="text-xl text-gray-500 font-medium leading-relaxed italic max-w-lg">
              "We provide the bridge between academic curiosity and professional excellence, ensuring every Ethnotech student is industry-ready from day one."
            </p>
            <div className="grid grid-cols-2 gap-12 pt-6">
               <div className="space-y-2">
                 <span className="text-5xl font-black text-gray-900">98%</span>
                 <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.3em] leading-none">Placements</p>
               </div>
               <div className="space-y-2">
                 <span className="text-5xl font-black text-indigo-600">50+</span>
                 <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.3em] leading-none">Elite Partners</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Elite Partner Section */}
      <section className="py-16 bg-slate-100 border-y border-gray-200 flex flex-col items-center justify-center space-y-6">
         <div className="text-[10px] font-black uppercase text-gray-400 tracking-[0.6em]">Our Dedicated Growth Partner</div>
         <div className="flex items-center space-x-4 group">
            <span className="text-5xl md:text-7xl font-black tracking-tighter text-indigo-900 opacity-20 hover:opacity-100 transition duration-500 select-none italic">GOOGLE</span>
         </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact" className="py-40 px-8 bg-indigo-700 relative overflow-hidden text-white font-sans">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center space-y-16">
             <div className="space-y-6">
               <h2 className="text-7xl font-black tracking-tighter leading-none">Let's Build the Future.</h2>
               <p className="text-2xl text-indigo-100 max-w-2xl mx-auto font-medium opacity-80 underline underline-offset-8 decoration-indigo-200 decoration-1">Have a question? Our academic advisors are standing by to help you grow.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition duration-500 text-left">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-2">Campus</p>
                   <p className="text-xl font-black leading-tight">Ethnotech Tower, Bangalore, IN</p>
                </div>
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition duration-500 text-left">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-2">Inquiries</p>
                   <p className="text-xl font-black leading-tight">connect@ethnotech.com</p>
                </div>
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition duration-500 text-left flex flex-col justify-between items-start">
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-2">Direct</p>
                     <p className="text-xl font-black leading-tight">+91 (800) ETHNO-TECH</p>
                   </div>
                   <Link to="/register" className="mt-8 px-6 py-3 bg-white text-indigo-700 font-extrabold rounded-2xl hover:bg-emerald-400 transition transform hover:-translate-y-1">Apply Now</Link>
                </div>
             </div>
          </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
