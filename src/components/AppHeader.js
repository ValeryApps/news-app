import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../data/categories";
import { AppIntro } from "./AppIntro";
import { CountriesDrawer } from "./CountriesDrawer";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CategoriesDrawer } from "./CategoriesDrawer";
import { getAuth } from "firebase/auth";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { UserMenu } from "./UserMenu";

export const AppHeader = () => {
  const auth = getAuth();

  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isCountryDrawer, setIsCountryDrawer] = useState(false);
  const [isCategoryDrawer, setIsCategoryDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loggedIn } = useAuthStatus();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    loggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [loggedIn]);
  const logout = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="hidden md:block">
        <AppIntro visible={isVisible} setVisible={setIsVisible} />
      </div>
      <div className="w-full bg-teal-900 sticky top-0 py-2 z-50">
        <nav className="max-w-[90%] flex justify-between items-center mx-auto relative">
          <div className="flex gap-2">
            <div onClick={() => setIsCountryDrawer(!isCountryDrawer)}>
              {isCountryDrawer ? (
                <AiOutlineClose
                  size={24}
                  className="text-white cursor-pointer"
                  color="white"
                />
              ) : (
                <FiMenu size={24} className="text-white cursor-pointer" />
              )}
            </div>
            <div className="w-16">
              <img src="/images/e24.png" alt="" className="rounded-md" />
            </div>
          </div>
          <div className="hidden gap-3 md:flex items-center">
            <Link
              to="/"
              className={`${
                pathname === "/" ? "bg-white text-black" : "text-white"
              } font-bold py-2 px-3 rounded-md`}
            >
              Home
            </Link>
            {categories.slice(0, 3).map(({ text, link }) => (
              <Link
                key={link}
                to={`/categories/${link}`}
                className={`${
                  pathname === `/categories/${link}`
                    ? "bg-white text-black"
                    : "text-white"
                } font-bold py-2 px-3 rounded-md`}
              >
                {text}
              </Link>
            ))}
            <div
              className="text-white cursor-pointer"
              onClick={() => setIsVisible(!isVisible)}
            >
              More News...
            </div>
          </div>
          {!isLoggedIn ? (
            <div className="flex gap-3 items-center">
              <Link className="text-white" to="/login">
                LOGIN
              </Link>
              <Link
                className="bg-teal-500 px-3 py-1 rounded-md text-white"
                to="/register"
              >
                SIGN UP
              </Link>
            </div>
          ) : (
            <div
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
              className=" py-2"
            >
              {" "}
              <span className="text-white cursor-pointer">
                {auth.currentUser?.displayName}
              </span>
              {showMenu && <UserMenu logout={logout} />}
            </div>
          )}
          <div
            onClick={() => setIsCategoryDrawer(!isCategoryDrawer)}
            className="md:hidden"
          >
            <BsThreeDots className="text-white cursor-pointer" />
          </div>
        </nav>
        <CountriesDrawer
          visible={isCountryDrawer}
          setVisible={setIsCountryDrawer}
        />
        <CategoriesDrawer
          visible={isCategoryDrawer}
          setVisible={setIsCategoryDrawer}
        />
      </div>
    </>
  );
};
