import React from 'react';

function Card({ title, value, bgClass, icon }) {
  return (
    <div className={`group relative p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 backdrop-blur-lg ${bgClass}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold uppercase tracking-widest opacity-80">{title}</h3>
        {icon && <span className="text-2xl group-hover:rotate-12 transition">{icon}</span>}
      </div>
      <p className="text-4xl font-black tracking-tight">{value}</p>
      <div className="absolute top-0 right-0 p-2 opacity-5 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition">
        <span className="text-6xl font-black">{value}</span>
      </div>
    </div>
  );
}

export default Card;
