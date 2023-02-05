import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetch_posts_per_category } from "../../api/postApi";
import { MainPost } from "./MainPost";
import { RightPost } from "./RightPost";

export const PostsCategory = ({ category }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await fetch_posts_per_category(category);
      setPosts(data);
    };
    getPosts();
  }, [category, setPosts]);

  return (
    <div className="flex gap-3 flex-wrap mb-2">
      <div className="w-full md:w-[40%]">
        <MainPost posts={posts} index={0} />
      </div>
      <div className="w-full md:w-[58%] flex flex-col gap-1">
        {posts?.map((post, index) => (
          <RightPost post={post} key={index} />
        ))}
      </div>
    </div>
  );
};
