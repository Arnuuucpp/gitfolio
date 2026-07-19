import React from "react";

const PinnedRepos = (props) => {
    if (!props.repo) return null;

    return (
        <>
            <h3 className="font-archivo text-2xl mb-2">Pinned Repos</h3>
            <div className="flex flex-wrap gap-2 justify-start overflow-x-hidden">
                {props.repo.slice(0, 8).map((e) => {
                    const date = new Date(e.updated_at);
                    const humanReadable = date.toLocaleDateString();

                    return (
                        <div
                            key={e.id}
                            className="font-grotesk border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2 bg-[#A78BFA] text-white max-w-fit max-h-fit flex flex-col gap-1 whitespace-nowrap"
                        >
                            <h3 className="font-grotesk font-bold">{e.name}</h3>

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

                            <p className="text-sm text-black">last push {humanReadable}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PinnedRepos;
