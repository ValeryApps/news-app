import React from "react";
import { Link } from "react-router-dom";

export const MainPost = ({ posts, index }) => {
  let post = {};
  if (posts) {
    post = posts[index];
  }
  return (
    <div className="bg-white mb-2 p-4 h-[380px] lg:mb-0 md:h-96 overflow-hidden">
      <div className=" overflow-hidden">
        <img
          src={post?.images[0]}
          alt=""
          className="w-full h-[200px] md:h-[250px] hover:scale-125 transition duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <Link to={`/post/${post?.slug}`}>
        <h2 className="text-md font-bold line-clamp-2 mb-2">{post?.title}</h2>
      </Link>
    </div>
  );
};
