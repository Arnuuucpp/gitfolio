import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/archivo-black";
import Heatmap from "./Components/Heatmap";
import PinnedRepos from "./Components/PinnedRepos";
import Swal from "sweetalert2"
import Alert from "./Components/AlertModal";

const App = () => {
  const [Username, setUsername] = useState("");
  const [UserData, setUserData] = useState(null);
  const [repo, setrepo] = useState(null);

  const [alert, setAlert] = useState({ show: false, message: '', type: 'error' });

  const getData = async () => {
    try {
      const response = await Axios.get(`https://api.github.com/users/${Username}`)
      const repo = await Axios.get(`https://api.github.com/users/${Username}/repos`)
      console.log(response.data);
      // console.log(repo.data[2].name);

      setUserData(response.data);
      setrepo(repo.data);
    } catch (error) {
      setAlert({
        show:true,
        message: "User not found or API error...Try Again!!", 
        type: 'error'
      })
    }
  };

  return (
    <div className="bg-[#f5f5f5] h-screen p-4">
      <Navbar />

      <div className="p-10 flex flex-col items-center justify-center">
        <h1 className="font-archivo text-5xl text-center text-zinc-800">
          find any developer on github...
        </h1>
        <div className="flex items-center justify-center gap-5 mt-6 mb-1">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-black text-lg"></i>
            <input
              type="text"
              placeholder="enter the username"
              className="font-grotesk text-sm w-125 bg-transparent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-text"
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

      {/* hero section */}
      <div className="grid grid-cols-[660px_1fr] gap-3 bg-[#f5f5f5]">
        <Card UserData={UserData} repo={repo} />

        <div className="flex flex-col gap-2">
          {UserData && <Heatmap username={UserData.login} />}
          {repo && <PinnedRepos repo={repo}/>}
        </div>
      </div>

      {/* ✅ Adding ALERT COMPONENT HERE */}
      {alert.show && (
        <Alert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert({ ...alert, show: false })} 
        />
      )}
    </div>
  );
};

export default App;
