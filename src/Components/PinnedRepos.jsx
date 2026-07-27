import React from "react";

const PinnedRepos = (props) => {
    if (!props.repo) return null;

    return (
        <>
            <h3 className="font-archivo text-2xl mb-2 mt-4 ml-2">Pinned Repos</h3>
            <div className="flex flex-wrap gap-2 justify-start mb-10">
                {props.repo.slice(0, 9).map((e) => {
                    const date = new Date(e.updated_at);
                    const humanReadable = date.toLocaleDateString();

                    return (
                        <div
                            key={e.id}
                            className="font-grotesk border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2 bg-transparent text-white w-fit flex flex-col gap-1 cursor-crosshair hover:scale-105 hover:shadow-lg transition-all ml-2"

                            onClick={() => { window.open(`https://github.com/${e.full_name}/`, '_blank', 'noopener,noreferrer')}}
                        >
                            <h3 className="font-grotesk font-bold text-green-700 truncate">{e.name}</h3>

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

                            <p className="text-sm text-blue-900">last push {humanReadable}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PinnedRepos;
