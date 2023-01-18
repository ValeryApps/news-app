import React from "react";
import { MainPost } from "./MainPost";
import { RightPost } from "./RightPost";

export const PostsCategory = ({ posts }) => {
  return (
    <div className="flex gap-3 flex-wrap mb-2">
      <div className="w-full md:w-[40%]">
        <MainPost posts={posts} index={0} />
      </div>
      <div className="w-full md:w-[58%] flex flex-col gap-1">
        {posts.slice(1, 4).map((post, index) => (
          <RightPost post={post} key={index} />
        ))}
      </div>
    </div>
  );
};
