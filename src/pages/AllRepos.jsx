import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const AllRepos = () => {
  const [Reposdata, setReposData] = useState(null);
  const params = useParams();

  const fetchRepos = async () => {
    try {
      const response = await Axios.get(
        `https://api.github.com/users/${params.username}/repos`,
      );
      console.log(response.data);
      setReposData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [params.username]);

  return (
    <>
      <h1 className="font-archivo font-extrabold text-3xl text-center mt-4">All Repositories</h1>
      <div className="flex flex-wrap gap-4 p-4 items-center justify-center">
        {Reposdata &&
          Reposdata.map((e) => {
            const date = new Date(e.updated_at);
            const humanReadable = date.toLocaleDateString();

            return <div
                  key={e.id}
                  className="font-grotesk border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2 bg-transparent text-white w-fit flex flex-col gap-1 cursor-crosshair hover:scale-105 hover:shadow-lg transition-all"
                  onClick={() => {
                    window.open(
                      `https://github.com/${e.full_name}/`,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                >
                  <h3 className="font-grotesk font-bold text-green-700 truncate">
                    {e.name}
                  </h3>

                  <div className="flex items-center gap-3 text-black font-semibold">
                    <span>{e.language}</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-git-fork-line"></i>
                      {e.forks}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-star-fill"></i>
                      {e.stargazers_count}
                    </span>
                  </div>

                  <p className="text-sm text-blue-900">
                    last push {humanReadable}
                  </p>
            </div>
          })}
      </div>
    </>
  );
};

export default AllRepos;

/*Create a useState for repos (starts as null)
Create a useEffect that runs when the component mounts (and when params.username changes) — inside it, make an Axios.get call to https://api.github.com/users/${params.username}/repos, then store the result in your state
Your loading check and .map() should both reference that state variable, not props.repo */
