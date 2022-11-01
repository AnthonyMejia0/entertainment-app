import { MediaInfo } from "./interfaces";
import Movie from "./assets/icon-nav-movies.svg";
import TV from "./assets/icon-nav-tv-series.svg";
import BookmarkEmpty from "./assets/icon-bookmark-empty.svg";
import BookmarkFull from "./assets/icon-bookmark-full.svg";
import { useEffect, useState } from "react";

function TrendingCard({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  isTrending,
}: MediaInfo) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  useEffect(() => {}, [bookmarked]);

  return (
    <div className="relative shrink-0 p-4 w-[315px] aspect-video overflow-hidden rounded-lg cursor-pointer">
      <img
        className="absolute opacity-80 top-0 left-0"
        src={require(`${thumbnail.trending!.small}`)}
        alt={`${title} Thumbnail`}
      />
      <div className="">
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="absolute top-[0.6rem] right-3 bg-gray-600 hover:bg-gray-400 rounded-full p-3"
        >
          <img
            className="w-4"
            src={`${bookmarked ? BookmarkFull : BookmarkEmpty}`}
            alt="Bookmark"
          />
        </button>
        <div className="mt-24">
          <div className="font-light text-white text-sm opacity-90 flex space-x-2 items-center">
            <p>{year}</p>
            <p>•</p>
            <img
              className="w-3 h-3"
              src={`${category === "Movie" ? Movie : TV}`}
              alt="Category"
            />
            <p>{category}</p>
            <p>•</p>
            <p>{rating}</p>
          </div>
          <h3 className="text-white text-lg opacity-95">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
