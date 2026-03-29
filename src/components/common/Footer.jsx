import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center grayscale">
           <span className="text-gray-400 font-black text-xl">E</span>
        </div>
        <h3 className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 font-black">Official Partner</h3>
        <div className="flex items-center space-x-6 mb-8">
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            className="h-6 opacity-60 hover:opacity-100 transition"
          />
        </div>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-10 text-sm font-medium leading-relaxed">
          Ethnotech Academy Solutions is committed to empowering the next generation of engineers through advanced assignment systems and premium internship placements.
        </p>
        <div className="w-full pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-400">
          <p>© 2026 Ethnotech Academy Solutions. All rights reserved.</p>
          <div className="space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-600 transition">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition">Terms</a>
            <a href="#" className="hover:text-indigo-600 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
