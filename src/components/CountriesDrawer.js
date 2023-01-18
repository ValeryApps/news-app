import React from "react";
import { Link, useLocation } from "react-router-dom";
import { countries } from "../data/countries";

export const CountriesDrawer = ({ visible }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        visible
          ? "countries-drawer-out custom-scroll country-animate"
          : "countries-drawer-in"
      }`}
    >
      <div>
        <img src="/512.png" alt="" className="h-40 w-full" />
      </div>
      <div>
        {countries.map(({ name, flag, value }) => (
          <div
            key={name}
            className={`${
              pathname === `/countries/${value}` ? "bg-slate-300" : ""
            } flex justify-between items-center py-3 px-2 border-b-2 border-blue-200`}
          >
            <Link
              to={"/countries/" + value}
              className="            
              text-xl font-semibold text-teal-800"
            >
              {name}
            </Link>
            <img src={flag} alt={name} className="w-7" />
          </div>
        ))}
      </div>
    </div>
  );
};
