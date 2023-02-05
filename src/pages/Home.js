import React from "react";
import { Helmet } from "react-helmet";
import { ImageSlideShow } from "../components/slide/ImageSlideShow";
import TypeWriterEffect from "react-typewriter-effect";
import { PostsCategory } from "../components/posts/PostsCategory";
import { RightSide } from "../components/right/RightSide";
import { CategoryPill } from "../components/category/CategoryPill";
import { GiPublicSpeaker } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
// import { useState } from "react";
import { useEffect } from "react";
import { fetch_posts } from "../api/postApi";
// import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetPostsAsync } from "../store/reducers/post";
import { SpinnerComponent } from "../components/SpinnerComponent";

export const Home = () => {
  const { posts, status } = useSelector((state) => ({ ...state.posts }));

  const dispatch = useDispatch();
  const storyTitles = posts?.map((x) => x.title);

  useEffect(() => {
    const getPost = async () => {
      await fetch_posts();
      dispatch(await fetPostsAsync());
    };
    getPost();
  }, [dispatch]);

  if (status === "loading") {
    return <SpinnerComponent />;
  }
  return (
    <div className="lg:p-10 ">
      <Helmet title="Home - News App"></Helmet>
      <>
        <div className="bg-white border-[#123456] rounded-md border-l-8 border-r-8 my-4 border-t-2 border-b-2 w-full md:w-[76%] px-3 line-clamp-1">
          {storyTitles.length > 0 ? (
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#3F3D56",
                fontWeight: 500,
                fontSize: "1em",
              }}
              startDelay={100}
              cursorColor="black"
              multiText={storyTitles}
              typeSpeed={100}
              // scrollArea={myAppRef}
            />
          ) : (
            <h2>Loading Headlines...</h2>
          )}
        </div>
        <ImageSlideShow posts={posts} />
      </>
      <div className="flex lg:gap-3">
        <div>
          <div>
            <CategoryPill category={"Politics"}>
              <GiPublicSpeaker />
            </CategoryPill>
            <PostsCategory category={"politics"} />
          </div>
          <div>
            <CategoryPill category={"Economy"}>
              <BsGraphUp />
            </CategoryPill>
            <PostsCategory category={"economy"} />
          </div>
          <div>
            <CategoryPill category={"Sports"}>
              <FaRunning />
            </CategoryPill>
            <PostsCategory category={"sports"} />
          </div>
          <div>
            <CategoryPill category={"Technology"}>
              <MdComputer />
            </CategoryPill>
            <PostsCategory category={"technology"} />
          </div>
        </div>
        <div className="w-[25%] hidden md:block bg-white shadow-md mt-6">
          <RightSide />
        </div>
      </div>
    </div>
  );
};
