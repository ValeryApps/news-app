import { Link } from "react-router-dom";
import { GrUserSettings, GrAdd } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { useAuthStatus } from "../hooks/useAuthStatus";

export const UserMenu = ({ logout }) => {
  let { loggedInAsAuthor, loggedInAsAdmin } = useAuthStatus();
  return (
    <div className="w-[150px] bg-white absolute right-0 text-black z-[70] p-1 top-10 shadow-md rounded-b-md">
      <ul className="flex flex-col gap-3 ">
        <li className="hover:bg-gray-200 rounded-lg font-semibold p-2  ">
          <Link className="flex items-center gap-3" to="/setting">
            <GrUserSettings />
            <span className="hover:text-teal-500 text-gray-700"> SETTING</span>
          </Link>
        </li>
        {loggedInAsAuthor ||
          (loggedInAsAdmin && (
            <li className="hover:bg-gray-200 rounded-lg font-semibold p-2">
              <Link className="flex items-center gap-3" to="/add-post">
                <GrAdd />
                <span className="hover:text-teal-500 text-gray-700">
                  {" "}
                  ADD POST
                </span>
              </Link>
            </li>
          ))}

        <li
          className="hover:bg-gray-200 rounded-lg font-semibold flex items-center gap-3 p-2 cursor-pointer"
          onClick={logout}
        >
          <FiLogOut />
          <span className="hover:text-teal-500  text-gray-700"> LOGOUT</span>
        </li>
      </ul>
    </div>
  );
};
