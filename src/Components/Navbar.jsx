import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f4f4f4] border-b-2 border-black relative z-50">
      {/* Main Header Row */}
      <div className="flex items-center justify-between px-4 py-3 md:px-12 md:py-3">
        
        {/* Brand Section */}
        <div className="flex items-center gap-2 z-50">
          <i className="ri-github-fill text-2xl md:text-3xl text-black hover:scale-110 cursor-pointer"></i>
          <span className="font-archivo text-lg md:text-xl text-black font-bold cursor-pointer">
            <Link to="/">GITFOLIO</Link>
          </span>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col items-start">
             <p className="text-black font-sans text-xs font-normal">
              Browse users via{" "}
              <a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer" className="text-[#269930] hover:underline">
                GitHub API
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/compare" className="font-grotesk text-sm hover:font-bold">Compare</Link>
            <Link to="/liked" className="font-grotesk text-sm hover:font-bold">Liked</Link>
            <span className="text-black">|</span>
            <button className="font-grotesk text-sm bg-transparent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              Login
            </button>
            <button className="font-grotesk text-sm bg-[#FF6B4A] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              Signup
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#f4f4f4] active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <i className="ri-close-line text-xl"></i>
          ) : (
            <i className="ri-menu-line text-xl"></i>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f4f4f4f5] border-b-2 border-black px-4 py-6 flex flex-col gap-4 shadow-[0px_10px_0px_0px_rgba(0,0,0,0.1)] animate-in slide-in-from-top-2">
          
          {/* Subtitle moved inside menu for mobile */}
          <p className="text-black font-sans text-xs font-normal pb-2 border-b border-gray-200">
            Browse users and their profiles via{" "}
            <a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer" className="text-[#269930] font-bold hover:underline">
              the GitHub API
            </a>
          </p>

          <div className="flex flex-col gap-4">
            <Link 
              to="/compare" 
              className="font-grotesk text-lg font-medium hover:font-bold pl-2 border-l-4 border-transparent hover:border-black transition-all"
              onClick={() => setIsOpen(false)}
            >
              Compare
            </Link>
            <Link 
              to="/liked" 
              className="font-grotesk text-lg font-medium hover:font-bold pl-2 border-l-4 border-transparent hover:border-black transition-all"
              onClick={() => setIsOpen(false)}
            >
              Liked
            </Link>
            
            <div className="h-px bg-black my-2"></div>
            
            <button className="w-full font-grotesk text-base bg-transparent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-3 font-semibold active:scale-95 transition-transform">
              Login
            </button>
            <button className="w-full font-grotesk text-base bg-[#FF6B4A] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-3 font-semibold active:scale-95 transition-transform">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;   