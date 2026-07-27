import React from "react";
import Checkbox from "./Checkbox";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Swal from "sweetalert2";

const Card = (props) => {
  if (!props.UserData || !props.repo) {
    return (
      <div className="md:w-332 w-full md:ml-4">
        <div className="border-2 border-black bg-[#f8f8f8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 text-center flex flex-col items-center justify-center">
          <h2 className="font-archivo text-xl text-black">GitHub profile will appear here</h2>
          <p className="font-grotesk text-sm mt-2 text-black">
            Search for a GitHub username to view their profile card and stats.
          </p>
        </div>
      </div>
    );
  }

  let Username = props.UserData.login;

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-2 mb-3 ml-1 mr-1 md:ml-4">
        <h1 className="font-archivo text-2xl ">User Info</h1>
        
        {/* Mobile stacks (flex-col), Desktop goes back to original w-fit h-fit flex-row */}
        <div className="font-grotesk text-sm w-full md:w-fit h-fit bg-[#F5C518] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 md:px-2 md:py-2 text-black font-semibold focus:outline-none cursor-cell relative flex flex-col md:flex-row gap-4 md:gap-2 items-center">
          
          <img
            src={props.UserData.avatar_url}
            alt="rendering"
            className="w-32 h-32 md:w-67.5 md:h-62.5 border-2 border-zinc-90 object-cover object-center shrink-0 mb-0"
          />

          <div className="flex flex-col mt w-full text-center md:text-left">
            <h1 className="text-2xl">{props.UserData.name}</h1>
            

            <div className="flex md:absolute md:right-3 md:top-11 justify-center md:justify-around gap-4 text-2xl font-extralight my-2 md:my-0">
              <i
                className="ri-twitter-x-line cursor-pointer"
                onClick={() => {
                  window.open(
                    `https://x.com/${props.UserData.twitter_username}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              ></i>
              <i
                className="ri-user-5-fill cursor-pointer"
                onClick={() => {
                  window.open(
                    `https://${props.UserData.blog}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              ></i>
            </div>

            <div className="flex justify-center md:block md:absolute md:right-3 md:top-3 scale-95">
              <Checkbox />
            </div>

            <div className="md:absolute md:right-14 md:top-2 border-none"></div>

            <span>
              <p className="font-light font-grotesk mb-2">
                @{props.UserData.login}
              </p>
            </span>

            <div className="flex gap-1 justify-around items-center w-full">
              <div
                className="font-grotesk text-sm flex-1 md:flex-none md:w-fit bg-[#FF6B4A] border-2 border-black px-1.5 py-2 text-white font-bold focus:outline-none cursor-pointer hover:scale-95 hover:shadow-lg transition-all"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}?tab=followers`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                {props.UserData.followers}
                <span className="font-semibold text-s text-black flex flex-col font-grotesk">
                  Followers{" "}
                </span>
              </div>

              <div
                className="font-grotesk text-sm flex-1 md:flex-none bg-[#FF6B4A] border-2 border-black px-1.5 py-2 text-white font-bold focus:outline-none cursor-pointer hover:scale-95 hover:shadow-lg transition-all"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}?tab=following`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                {props.UserData.following}
                <span className="font-semibold text-s text-black flex flex-col font-grotesk">
                  Following{" "}
                </span>
              </div>

              <div
                className="font-grotesk text-sm flex-1 md:flex-none bg-[#FF6B4A] border-2 border-black px-1.5 py-2 text-white font-bold focus:outline-none cursor-pointer hover:scale-95 hover:shadow-lg transition-all"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}?tab=repositories`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                {props.UserData.public_repos}
                <span className="font-semibold text-s text-black flex flex-col font-grotesk">
                  Repository{" "}
                </span>
              </div>
            </div>

            <div className="w-full font-grotesk font-light mt-2 min-h-10 border-2 border-black rounded-2xl bg-orange-200 p-2 text-center">
              {props.UserData.bio}
            </div>


            <div className="flex flex-col md:flex-row gap-2 justify-around mt-2 w-full">
              <button
                className="font-grotesk text-sm w-full bg-transparent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 md:px-10 py-2 text-black font-semibold focus:outline-none cursor-pointer active:scale-95 whitespace-nowrap hover:bg-[#f4f4f441]"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                view on github{" "}
                <i className="ri-github-fill text-lg text-black hover:scale-110 cursor-pointer"></i>
              </button>

              <button
                className="font-grotesk text-sm w-full bg-[#8fbdf8] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 md:px-10 py-3 text-black font-semibold focus:outline-none cursor-pointer active:scale-95 whitespace-nowrap"
                onClick={() => {
                  navigate(`/${Username}/repos`);
                }}
              >
                all repos
              </button>
            </div>
          </div>
        </div>

        <button
          className="font-grotesktext-sm md:w-full rounded bg-[#41a062] hover:bg-[#69b684] hover:text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-white font-semibold focus:outline-none cursor-pointer active:scale-95 transition-all"
          onClick={async () => {
            const profileUrl = `https://github.com/${Username}`;

            try {
              await navigator.clipboard.writeText(profileUrl);
              Swal.fire({
                icon: "success",
                title: "Profile link copied!",
                text: profileUrl,
                timer: 1800,
                showConfirmButton: false,
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Copy failed",
                text: "Your browser blocked clipboard access.",
              });
            }
          }}
        >
          Share this Profile <i className="ri-share-forward-line"></i>
        </button>

        {(() => {
          const languageCounts = {};
          props.repo.forEach((e) => {
            if (e.language) {
              languageCounts[e.language] =
                (languageCounts[e.language] || 0) + 1;
            }
          });

          const chartData = Object.entries(languageCounts).map(
            ([name, count]) => ({
              name,
              count,
            })
          );

          console.log(chartData);

          return (
            <div className="bg-white w-full h-72 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 rounded-2xl">
              <h3 className="font-archivo text-lg mb-2 ml-2 text-black text-center">Top Languages</h3>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={80} />
                  <Bar dataKey="count" fill="#FF6B4A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default Card;