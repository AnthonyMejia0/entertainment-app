import NavBar from "./NavBar";
import Search from "./assets/icon-search.svg";
import React, { Key, useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
//import { MediaInfo } from "./interfaces";
import data from "../data.json";
import { MediaInfo } from "./interfaces";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [trending, setTrending] = useState([] as MediaInfo[]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //setSearchInput("");
  };

  useEffect(() => {
    setTrending(data.filter((info) => info.isTrending));
  }, []);

  return (
    <div className="md:p-4 xl:p-8 xl:flex">
      <NavBar />

      <div className="px-5 mt-8 xl:mt-0 xl:flex-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-grow space-x-8 text-white items-center"
        >
          <img src={Search} alt="Search" />
          <input
            className="flex-1 h-10 bg-transparent font-light outline-none focus:border-b border-greyish-blue"
            type="text"
            placeholder="Search for movies or TV series"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>

        <div className="mt-5">
          <h1 className="text-white text-[30px] mb-5">Trending</h1>
          <div className="-mx-5 flex space-x-5 before:pl-5 after:pr-5 overflow-x-scroll">
            {trending.map((trend: MediaInfo, i: Key) => (
              <TrendingCard key={i} {...trend} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
