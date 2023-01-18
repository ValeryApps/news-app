import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";

export const CategoriesLinks = () => {
  return (
    <div className="flex items-center gap-3 shadow-md px-2 rounded-md bg-white opacity-50 justify-between ">
      {categories.slice(3).map(({ link, text, icon }) => (
        <div key={link} className="flex items-center">
          <img src={icon} alt={text} className="h-7 w-9 rounded-md " />
          <Link
            to={"/categories/" + link}
            className="text-black font-bold text-md p-3"
          >
            {text}
          </Link>
        </div>
      ))}
    </div>
  );
};
