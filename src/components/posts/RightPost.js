import React from "react";
import { Link } from "react-router-dom";

export const RightPost = ({ post }) => {
  return (
    <div className="h-[125] flex gap-2 lg:mb-0 items-start p-1 overflow-hidden bg-white md:mt-0 pb-1">
      <div className="overflow-hidden  min-w-[170px] max-w-[150px] h-[117px] cursor-pointer">
        <img
          src={post?.images[0]}
          alt={post?.title}
          className="w-full h-full"
        />
      </div>
      <Link to={`/post/${post?.slug}`}>
        <h2 className="text-lg line-clamp-2 font-bold mb-2" title={post?.title}>
          {post?.title}
        </h2>
      </Link>
    </div>
  );
};
