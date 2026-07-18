import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2 py-2 border-b-2 border-black">
      <div className="flex items-center gap-2">
        <i className="ri-github-fill text-3xl text-black hover:scale-110 cursor-pointer"></i>
        <span className="font-archivo text-xl text-black">GITFOLIO</span>
        <p class="text-black font-sans text-sm font-normal  inline-block absolute left-16 top-14">
          Browse users and their profiles via <a target="blank"
            href="https://developer.github.com/v3/"
            class="text-[#269930] no-underline hover:underline transition-colors duration-200"
          >
            the GitHub API
          </a>
        </p>
      </div>

      <div className="flex items-center gap-8">
        <span className="font-grotesk text-sm text-black cursor-pointer whitespace-nowrap hover:font-bold">
          Compare
        </span>
        <span className="font-grotesk text-sm text-black cursor-pointer hover:font-bold">
          Liked
        </span>
        <span className="text-black">|</span>

        <button className="font-grotesk text-sm w-full bg-[#8fbdf8] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-pointer active:scale-95">
          Login
        </button>

        <button className="font-grotesk text-sm w-full bg-[#8fbdf8] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-pointer active:scale-95">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
