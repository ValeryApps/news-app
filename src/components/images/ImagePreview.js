import React, { useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";

const ImagePreview = ({ images, setImages, handleImages }) => {
  const imageInputRef = useRef(null);

  return (
    <div className="h-[200px] border-2 overflow-y-hidden border-gray-500 bg-slate-200 rounded-md relative">
      <div className="grid place-items-center h-full">
        <input
          type="file"
          accept="image/jpeg, image/jpg, image/gif, image/png, image/webp"
          multiple
          hidden
          ref={imageInputRef}
          onChange={handleImages}
        />
        {images && images.length > 0 ? (
          <>
            <div
              className="absolute right-1 top-1 bg-gray-500 rounded-full px-0.5 py-0.5 shadow-2xl text-white cursor-pointer"
              onClick={() => setImages([])}
            >
              <AiOutlineCloseCircle size={30} />
            </div>
            <div className="h-[200px] overflow-y-scroll custom-scroll flex flex-wrap pl-3 pr-3 gap-3 py-2">
              {images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt=""
                  className={`${
                    images.length > 1 ? "w-[48%] h-full" : "w-full h-full"
                  }  object-cover`}
                />
              ))}
            </div>
          </>
        ) : (
          <div
            className="w-full h-full grid place-items-center cursor-pointer"
            onClick={() => imageInputRef.current.click()}
          >
            <div className="grid place-items-center cursor-pointer ">
              <IoMdPhotos size={34} />
              <span>Add Photos/Videos</span>
              <span>or drag and drop</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
