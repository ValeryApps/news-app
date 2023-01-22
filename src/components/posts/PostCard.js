import React from "react";
import { Link } from "react-router-dom";
import { countries } from "../../data/countries";

export const PostCard = ({ story }) => {
  const country = countries.find((x) => x.value === story.country);

  return (
    <div className="w-full bg-white mb-3 pb-5 h-[350px] md:h-[300px] relative">
      <img src={story.images[0]} alt="" className="w-full" />
      <img
        src={country.flag}
        alt=""
        className="w-[20px] max-h-5 absolute top-0 "
      />
      <div className="px-2 flex flex-col justify-between overflow-hidden">
        <Link to={`/post/${story?.slug}`}>
          <h5
            className="font-semibold text-md line-clamp-3"
            title={story?.title}
          >
            {story?.title}
          </h5>
        </Link>
        <div className="flex gap-2 max-w-sm mb-2 overflow-hidden items-center">
          By: <span className="text-gray-500 font-bold">{story.author}</span>
        </div>
      </div>
    </div>
  );
};
