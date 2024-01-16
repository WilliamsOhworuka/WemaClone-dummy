"use client";

import {
  faBars,
  faBell,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "./appProvider";

export default function Topbar() {
  const { setState } = useAppContext();

  const toggleSidebar = () => {
    setState((prev) => ({ open: !prev.open }));
  };

  return (
    <div className="fixed left-0 tab:left-64 right-0 top-0 p-5 flex items-center justify-between bg-white transition-all ease-in-out z-10">
      <div className="flex items-center">
        <button
          className="flex justify-center items-center tab:hidden mr-4"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon
            icon={faBars}
            fontSize="20px"
            className="text-[#990D81]"
          />
        </button>
        <h1 className="text-normal sm:text-2xl font-medium">Dashboard</h1>
      </div>
      <div className="flex gap-8">
        <div className="bg-[whitesmoke] h-10 hidden sm:flex items-center gap-2 px-3 rounded-md">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          <input
            placeholder="Enter Keywords ..."
            className="bg-transparent w-64 h-full placeholder:text-sm placeholder:text-gray-400 placeholder:font-light"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-100 flex items-center justify-center rounded-full p-2 sm:hidden">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </button>
          <select
            name="languages"
            id="languages"
            className="focus:outline-none focus:border-b border-black py-1 text-gray-500"
          >
            <option value="EN">EN</option>
            <option value="FR">FR</option>
          </select>
          <button className="bg-gray-100 flex items-center justify-center rounded-full p-2">
            <FontAwesomeIcon icon={faSun} className="text-gray-400" />
          </button>
          <button className="bg-gray-100 flex items-center justify-center rounded-full p-2 relative">
            <FontAwesomeIcon icon={faBell} className="text-gray-400" />
            <span className=" bg-red-500 h-[8px] w-[8px] rounded-full absolute top-[6px] right-[6px]" />
          </button>
          <button className="bg-gray-400 w-10 h-10 rounded-full hidden tab:inline-block" />
        </div>
      </div>
    </div>
  );
}
