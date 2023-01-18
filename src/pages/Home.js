import React from "react";
import { Helmet } from "react-helmet";
import { dummyPosts } from "../data/dummyData";
import { ImageSlideShow } from "../components/slide/ImageSlideShow";
import TypeWriterEffect from "react-typewriter-effect";
import { PostsCategory } from "../components/posts/PostsCategory";
import { RightSide } from "../components/right/RightSide";
import { CategoryPill } from "../components/category/CategoryPill";
import { GiPublicSpeaker } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

export const Home = () => {
  const storyTitles = dummyPosts.slice(0, 10).map((x) => x.title);
  const politicPosts = dummyPosts.filter((x) => x.category === "Politics");
  const ecoPosts = dummyPosts.filter((x) => x.category === "Economy");
  const sportsPosts = dummyPosts.filter((x) => x.category === "Sports");
  const techPosts = dummyPosts.filter((x) => x.category === "Technology");

  return (
    <div className="lg:p-10 ">
      <Helmet title="Home - News App"></Helmet>
      <div>
        <div className="bg-white border-[#123456] rounded-md border-l-8 border-r-8 my-4 border-t-2 border-b-2 w-full md:w-[76%] px-3 line-clamp-1">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#3F3D56",
              fontWeight: 500,
              fontSize: "1.5em",
            }}
            startDelay={100}
            cursorColor="black"
            multiText={storyTitles}
            typeSpeed={100}
            // scrollArea={myAppRef}
          />
        </div>
        <ImageSlideShow posts={dummyPosts} />
      </div>
      <div className="flex lg:gap-3">
        <div>
          <div>
            <CategoryPill category={"Politics"}>
              <GiPublicSpeaker />
            </CategoryPill>
            <PostsCategory posts={politicPosts} />
          </div>
          <div>
            <CategoryPill category={"Economy"}>
              <BsGraphUp />
            </CategoryPill>
            <PostsCategory posts={ecoPosts} />
          </div>
          <div>
            <CategoryPill category={"Sports"}>
              <FaRunning />
            </CategoryPill>
            <PostsCategory posts={sportsPosts} />
          </div>
          <div>
            <CategoryPill category={"Technology"}>
              <MdComputer />
            </CategoryPill>
            <PostsCategory posts={techPosts} />
          </div>
        </div>
        <div className="w-[25%] hidden md:block bg-white shadow-md">
          <RightSide />
        </div>
      </div>
    </div>
  );
};
