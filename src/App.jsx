import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/archivo-black";

const App = () => {
  const [Username, setUsername] = useState("");
  const [UserData, setUserData] = useState(null);
  const [repo, setrepo] = useState(null);

  const getData = async () => {
    try {
      // const response = await Axios.get(`https://api.github.com/users/${Username}`)
      // const repo = await Axios.get(`https://api.github.com/users/${Username}/repos`)
      // console.log(response.data)
      console.log(repo.data[2].name);

      setUserData(response.data);
      setrepo(repo.data);
    } catch (error) {
      console.log("User not found or API error", error);
    }
  };

  return (
    <div className="bg-[#F5F5F5] h-screen p-4">
      <Navbar />

      <div className="p-10 flex flex-col items-center justify-center">
        <h1 className="font-archivo text-5xl text-center text-zinc-800">
          find any developer on github...
        </h1>
        <div className="flex items-center justify-center gap-5 mt-6 mb-3">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-black text-lg"></i>
            <input
              type="text"
              placeholder="enter the username"
              className="
            <RiSearch2Line />
            font-grotesk text-sm w-125 bg-transparent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-text"
              value={Username}
              onChange={(e) => {
                // console.log(e.target.value)
                setUsername(e.target.value);
              }}
            />
          </div>
          <button
            className="font-grotesk text-sm w-fit bg-[#FF6B4A] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-pointer active:scale-95"
            onClick={getData}
          >
            Find Now!
          </button>
        </div>
      </div>

      <div className="mt-6">
        {/* <Card UserData={UserData} repo={repo}/> */}
      </div>
    </div>
  );
};

export default App;
