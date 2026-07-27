import React, { useEffect, useState } from "react";
import Axios from "axios";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/archivo-black";
import Swal from "sweetalert2";
import Alert from "../Components/AlertModal";
import Card from "../Components/Card";
import Heatmap from "../Components/Heatmap";
import PinnedRepos from "../Components/PinnedRepos";

const Home = () => {
  const [Username, setUsername] = useState("");
  const [UserData, setUserData] = useState(null);
  const [repo, setrepo] = useState(null);

  const [recentSearches, setrecentSearches] = useState([]);

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "error",
  });

  const [showHistory, setshowHistory] = useState(false);

  const getData = async () => {
    try {
      const response = await Axios.get(
        `https://api.github.com/users/${Username}`,
      );
      const repo = await Axios.get(
        `https://api.github.com/users/${Username}/repos`,
      );
      console.log(response.data);
      console.log(repo.data[2]);

      setUserData(response.data);
      setrepo(repo.data);

      //implementing localStorage for recent search history

      const existing = JSON.parse(localStorage.getItem("recentSearches")) ?? [];
      console.log(existing);

      const currentUsername = response.data.login;
      const withoutDuplicate = existing.filter(
        (name) => name != currentUsername,
      );
      console.log(withoutDuplicate);

      const newArr = [currentUsername, ...withoutDuplicate];

      localStorage.setItem(
        "recentSearches",
        JSON.stringify(newArr.slice(0, 5)),
      );
      setrecentSearches(newArr.slice(0, 5));
    } catch (error) {
      setAlert({
        show: true,
        message: "User not found or API error...Try Again!!",
        type: "error",
      });
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) ?? [];
    setrecentSearches(saved);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="p-4 md:p-10 flex flex-col items-center justify-center">
        <h1 className="font-archivo text-3xl md:text-5xl text-center text-zinc-800">
          find any developer on github...
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mt-6 mb-1 w-full max-w-md md:max-w-none">
          <div className="relative w-full md:w-auto">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-black text-lg"></i>
            <input
              type="text"
              placeholder="enter the username"
              className="font-grotesk text-sm w-full md:w-125 bg-transparent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-text"
              value={Username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onFocus={() => setshowHistory(true)}
              onBlur={() => setshowHistory(false)}
            />
            {showHistory && recentSearches.length > 0 && (
              <ul className="font-grotesk text-sm bg-[#c0c492e7] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none mt-2 absolute w-full z-50">
                {recentSearches.map((item, idx) => (
                  <li
                    key={idx}
                    onMouseDown={() => {
                      setUsername(item);
                      setshowHistory(false);
                    }}
                    className="cursor-pointer hover:bg-[#55442a7c] px-2 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className="font-grotesk text-sm w-full md:w-fit bg-[#FF6B4A] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-pointer active:scale-95"
            onClick={getData}
          >
            Find Now!
          </button>
        </div>
      </div>

      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-[660px_1fr] gap-3 bg-[#f5f5f5] px-4 md:px-0">
        <Card UserData={UserData} repo={repo} />

        <div className="flex flex-col gap-2">
          {UserData && <Heatmap username={UserData.login} />}
          {repo && <PinnedRepos repo={repo} />}
        </div>
      </div>

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

export default Home;