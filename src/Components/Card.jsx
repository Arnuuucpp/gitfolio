import React from "react";
import Checkbox from "./checkbox";
import { Route, Routes, useNavigate } from "react-router-dom";

const Card = (props) => {
  if (!props.UserData) return null;
  // console.log(props.UserData)
  if (!props.repo) return null;
  // console.log(props.repo);

  let Username = props.UserData.login;
  const navigate = useNavigate()

  return (
    <div>
      {/* <div>
        {(props.repo).map((e)=>{
          return <h1 className='text-white' key={e.id}>{e.name}</h1>
        })}
      </div> */}

      <div className="flex flex-col gap-2 mb-3 ml-4">
        <h1 className="font-archivo text-2xl ">User Info</h1>
        <div className="font-grotesk text-sm w-fit h-fit bg-[#F5C518] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-2 py-2 text-black font-semibold focus:outline-none cursor-cell relative flex gap-2 items-center">
          <img
            src={props.UserData.avatar_url}
            alt="rendering"
            className="w-67.5 h-62.5 border-2 border-zinc-90 object-cover object-center"
          />

          <div className="flex flex-col mt-1">
            <h1 className="text-2xl">{props.UserData.name}</h1>
            <div className="absolute right-3 flex gap-4 justify-around top-11 text-2xl font-extralight">
              <i
                class="ri-twitter-x-line"
                onClick={() => {
                  window.open(
                    `https://x.com/${props.UserData.twitter_username}`,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              ></i>
              <i
                class="ri-user-5-fill"
                onClick={() => {
                  window.open(
                    `https://${props.UserData.blog}`,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              ></i>
            </div>
            <div className="absolute right-3  top-3 scale-95">
              <Checkbox />
            </div>
            <div className="absolute right-14 top-2 border-none"></div>
            <span>
              <p className="font-light font-grotesk mb-2">
                @{props.UserData.login}
              </p>
            </span>
            <div className="flex gap-2 justify-around items-center">
              <div
                className="font-grotesk text-sm w-fit bg-[#FF6B4A] border-2 border-black px-3 py-3 text-white font-bold focus:outline-none cursor-pointer hover:scale-95 hover:shadow-lg transition-all"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}?tab=followers`,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                {props.UserData.followers}
                <span className="font-semibold text-s text-black flex flex-col font-grotesk">
                  Followers{" "}
                </span>
              </div>

              <div
                className="font-grotesk text-sm  bg-[#FF6B4A] border-2 border-black px-3 py-3 text-white font-bold focus:outline-none cursor-pointer hover:scale-95 hover:shadow-lg transition-all"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}?tab=following`,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                {props.UserData.following}
                <span className="font-semibold text-s text-black flex flex-col font-grotesk">
                  Following{" "}
                </span>
              </div>

              <div
                className="font-grotesk text-sm bg-[#FF6B4A] border-2 border-black px-3 py-3 text-white font-bold focus:outline-none cursor-pointer hover:scale-95 hover:shadow-lg transition-all"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}?tab=repositories`,
                    "_blank",
                    "noopener,noreferrer",
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
            <div className="flex gap-2 justify-around mt-2">
              <button
                className="font-grotesk text-sm w-full bg-transparent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-pointer active:scale-95 whitespace-nowrap hover:bg-[#f4f4f441]"
                onClick={() => {
                  window.open(
                    `https://github.com/${Username}`,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                view on github{" "}
                <i className="ri-github-fill text-lg text-black hover:scale-110 cursor-pointer"></i>
              </button>

              <button
                className="font-grotesk text-sm w-full bg-[#8fbdf8] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-3 text-black font-semibold focus:outline-none cursor-pointer active:scale-95 whitespace-nowrap"
                onClick={() => {
                  navigate("/allrepos")
                }}
              >
                all repos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
