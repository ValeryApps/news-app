import React from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slide.css";

export const ImageSlideShow = ({ posts }) => {
  const zoomOutProperties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicator: true,
    scale: 0.1,
    arrow: true,
  };
  const imagePosts = posts.filter((x) => x.images.length > 0);
  return (
    <div className="h-[21rem] flex min-w-full gap-3 z-20">
      <div className="min-w-[50%] bg-[#bdb76b] h-[21rem]">
        <div className="slide-container relative max-h-[334px]">
          <Zoom {...zoomOutProperties}>
            {imagePosts.slice(0, 10).map((story, index) => (
              <div
                className="each-slide overflow-hidden max-h-[390px]"
                key={index}
              >
                <img
                  src={story.images[0]}
                  alt=""
                  className="w-full object-cover h-[336px]"
                />
                <div className="bg-[#00000080] relative px-2 bottom-32 max-w-[300px] min-h-[90px] rounded-r-2xl">
                  <Link to={`/post/${story.slug}`}>
                    <h1 className="text-md text-white">{story.title}</h1>
                  </Link>
                </div>
              </div>
            ))}
          </Zoom>
        </div>
      </div>
      <div className="min-w-[49%] h-[21rem] relative bg-white hidden overflow-hidden md:block">
        {posts.slice(0, 4).map((post, index) => (
          <div key={index} className={`index${index + 1}`}>
            <img src={post.images[0]} alt="" />
            <div className="text-white relative bg-[rgba(0,0,0,0.5)] bottom-16 h-[60px] w-[98%] mx-auto rounded-md px-1">
              <Link to={`/post/${post.slug}`}>
                <span className="overflow-hidden line-clamp-2">
                  {post.title}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
