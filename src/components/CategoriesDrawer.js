import React from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../data/categories";

export const CategoriesDrawer = ({ visible }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        visible
          ? "categories-drawer-out custom-scroll category-animate"
          : "categories-drawer-in"
      } md:hidden`}
    >
      <div>
        <img src="/512.png" alt="" className="h-40 w-full" />
      </div>
      <div>
        {categories.map(({ text, link, icon }) => (
          <div
            key={link}
            className={`${
              pathname === `/categories/${link}` ? "bg-slate-300" : ""
            } flex justify-between items-center py-3 px-2 border-b-2 border-blue-200`}
          >
            <Link
              to={"/categories/" + link}
              className="            
            text-xl font-semibold text-teal-800"
            >
              {text}
            </Link>
            <img src={icon} alt={text} className="w-7" />
          </div>
        ))}
      </div>
    </div>
  );
};
