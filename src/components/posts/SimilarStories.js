import React from "react";
import { Link } from "react-router-dom";

export const SimilarStories = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div className=" px-2 mb-4 border-b-2" key={post.slug}>
          <Link to={`/post/${post.slug}`}>
            <div className="">
              <img src={post.images[0]} alt="" className="w-full h-full" />
            </div>
            <h3 className="font-bold">{post.title}</h3>
            <div className="">
              <div className="line-clamp-3">{post.body}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
