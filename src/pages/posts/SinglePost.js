import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/posts/layout/Layout";
import { SimilarStories } from "../../components/posts/SimilarStories";
import { dummyPosts } from "../../data/dummyData";

export const SinglePost = () => {
  const { slug } = useParams();
  const post = dummyPosts.find((x) => x.slug === slug);
  const posts = dummyPosts.filter(
    (x) => x.category === post.category && x.slug !== post.slug
  );
  return (
    <Layout>
      <Helmet title={post.title}></Helmet>
      <div className="flex justify-between w-full gap-3">
        <div className="w-[40%] hidden md:block bg-white">
          <h1 className="text-3xl font-semibold py-2 text-center bg-teal-800 text-white rounded-t-md">
            Similar Stories
          </h1>
          <div className="pt-2">
            <SimilarStories posts={posts} />
          </div>
        </div>
        <div className="w-full bg-white rounded-t-xl">
          <div className="bg-teal-800  rounded-t-xl">
            {" "}
            <h1 className="text-4xl font-bold text-white py-3 px-2">
              {post.title}
            </h1>
          </div>
          <div className="pb-6">
            {" "}
            <img src={post.images[0]} alt="" className="w-full" />
          </div>
          <div className="px-2">Category:{post.category}</div>
          <div className="w-full px-3 text-gray-700 ml-2 [p:nth-of-type:font-bold]">
            {post.body}
          </div>
        </div>
      </div>
    </Layout>
  );
};
