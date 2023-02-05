import React from "react";
import { PostMedia } from "../posts/PostMedia";

export const RightSide = ({ posts }) => {
  return (
    <div className="w-full">
      <div>
        <img src="/images/e24.png" alt="" />
      </div>
      <div className="p-4">
        <h1>Ecowas24 Tv</h1>
      </div>
      {posts?.map((post) => (
        <PostMedia post={post} key={post?.slug} />
      ))}
    </div>
  );
};
