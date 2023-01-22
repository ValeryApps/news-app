import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/posts/layout/Layout";
import { PostCard } from "../../components/posts/PostCard";
import { dummyPosts } from "../../data/dummyData";

export const Category = () => {
  const { category } = useParams();
  const posts = dummyPosts.filter(
    (x) => x.category.toLowerCase() === category.toLowerCase()
  );
  return (
    <Layout>
      <Helmet title={category}></Helmet>
      {posts.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {posts.map((story, index) => (
            <div
              key={index}
              className="w-full sm:w-[47%] lg:w-[31%] xl:w-[23%]"
            >
              <PostCard story={story} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvVG1LhDLUrT3hUwn_wToYTvCPfBOaHPqrg&usqp=CAU"
            alt=""
            className="w-full"
          />
        </div>
      )}
    </Layout>
  );
};
