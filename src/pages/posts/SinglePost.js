import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";
import {
  fetch_posts_per_category,
  fetch_posts_per_slug,
} from "../../api/postApi";
import { Layout } from "../../components/posts/layout/Layout";
import { SimilarStories } from "../../components/posts/SimilarStories";
import { createMarkup } from "../../helpers/parseHtml";
import { GiClockwork } from "react-icons/gi";
import { useAuthStatus } from "../../hooks/useAuthStatus";

export const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [similarPosts, setSimilarPosts] = useState(null);
  const { slug } = useParams();
  const { loggedInAsAdmin, loggedInAsAuthor } = useAuthStatus();
  useEffect(() => {
    const getPost = async () => {
      const data = await fetch_posts_per_slug(slug);
      setPost(data);
    };
    getPost();
  }, [slug]);

  useEffect(() => {
    const getPosts = async () => {
      const data = post ? await fetch_posts_per_category(post?.category) : [];
      setSimilarPosts(data);
    };
    getPosts();
  }, [post]);
  const date = new Date(post?.createdAt * 1);
  const e = "";

  return (
    <Layout>
      <Helmet title={post?.title}></Helmet>
      <div className="flex justify-between w-full gap-3">
        <div className="w-[40%] hidden md:block bg-white">
          <h1 className="text-3xl font-semibold py-2 text-center bg-teal-800 text-white rounded-t-md">
            Similar Stories
          </h1>
          <div className="pt-2">
            <SimilarStories posts={similarPosts} />
          </div>
        </div>
        <div className="w-full bg-white rounded-t-xl">
          <div className="bg-teal-800  rounded-t-xl">
            <h1 className="text-4xl font-bold text-white py-3 px-2">
              {post?.title}
            </h1>
          </div>
          <div className="pb-6">
            <img src={post?.images[0]} alt="" className="w-full" />
          </div>
          <div className="px-2">Category: {post?.category}</div>
          <div className="w-full px-3 text-gray-700 ml-2 [p:nth-of-type:font-bold]">
            <div
              dangerouslySetInnerHTML={createMarkup(post?.description)}
            ></div>
          </div>
          <div className="border-slate-200 border-2 py-5 px-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <GiClockwork />
              <Moment
                className="text-[12px] text-gray-700 italic font-bold"
                fromNow
                date={date}
              ></Moment>
            </div>
            <div className="text-[12px] text-gray-700 italic font-bold">
              <span>By:</span> <span>{post?.author}</span>
            </div>
            <div className="text-[12px] text-gray-700 italic font-bold">
              <span>Country:</span> <span>{post?.country}</span>
            </div>
            <div className="text-[12px] text-gray-700 italic font-bold">
              <span>Category:</span>{" "}
              <span className="capitalize">{post?.category}</span>
            </div>
          </div>
          <Link to={`/edit-post/${post?.id}`}>Edit</Link>
        </div>
      </div>
    </Layout>
  );
};
