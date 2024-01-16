/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  faChevronDown,
  faClose,
  faCommentDots,
  faFileLines,
  faFilePen,
  faFolderMinus,
  faGear,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppContext } from "./appProvider";

const links = [
  {
    label: "Dashboard",
    icon: faHouse,
    path: "/",
  },
  {
    label: "Requests",
    icon: faCommentDots,
    path: "/requests",
  },
  {
    label: "KYCs",
    icon: faFilePen,
    path: "/kyc",
  },
  {
    label: "Reports",
    icon: faFileLines,
    path: "/reports",
  },
  {
    label: "Audit Trail",
    icon: faFolderMinus,
    links: [
      {
        label: "Trail 1",
        path: "/audit/trail1",
      },
      {
        label: "Trail 2",
        path: "/audit/trail2",
      },
    ],
  },
  {
    label: "Users",
    icon: faUsers,
    path: "/users",
  },
  {
    label: "Settings",
    icon: faGear,
    path: "/settings",
  },
];

export default function Sidebar() {
  const path = usePathname();
  const {
    state: { open },
    setState,
  } = useAppContext();
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const toggleOpenMenu = (index: number) => () => {
    setActiveMenuIndex((prev) => (prev !== null ? null : index));
  };

  const setOpen = (val: boolean) => {
    setState({
      open: val,
    });
  };

  useEffect(() => {
    const query = "(min-width: 1024px)";
    const media = window.matchMedia(query);

    const listener = () => {
      if (media.matches) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <div>
      <nav
        className={`w-64 bg-[#990D81] fixed top-0 left-0 bottom-0 p-4 flex flex-col justify-between transition-all ease-in-out z-30 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              width="100"
              height="100"
              alt="Logo"
              className="w-[120px] h-[85px]"
            />
          </div>
          <hr className=" border-t border-[#A11F8A] mx-4 mb-4" />
          <div>
            <ul className="flex flex-col gap-y-4">
              {links.map((link, index) =>
                link.path ? (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      className={`flex gap-4 items-center justify-start py-2 px-4 ${
                        path === link.path
                          ? "bg-[#A3248E] rounded-[4px] border-r-[4px] border-white"
                          : "hover:bg-[#A3248E] hover:rounded-md"
                      }`}
                    >
                      <span className="w-6 flex justify-start items-center">
                        <FontAwesomeIcon
                          icon={link.icon}
                          fontSize="20px"
                          color="white"
                        />
                      </span>
                      <span
                        className={`text-[0.8rem] ${
                          path === link.path ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li
                    key={link.label}
                    className={`flex items-start flex-col py-2 px-4 transition-all duration-300 ease-in-out ${
                      index === activeMenuIndex ? "gap-2" : "gap-0"
                    }`}
                  >
                    <button
                      className="flex gap-4 items-center justify-between w-full"
                      onClick={toggleOpenMenu(index)}
                    >
                      <span className="flex gap-4 items-center justify-start w-full">
                        <span className="w-6 flex justify-start items-center">
                          <FontAwesomeIcon
                            icon={link.icon}
                            fontSize="20px"
                            color="white"
                          />
                        </span>
                        <span className="text-gray-200 text-[0.8rem]">
                          {link.label}
                        </span>
                      </span>
                      <span className="bg-[#C26DB3] flex justify-center items-center rounded-[100%] p-1">
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          color="white"
                          size="xs"
                        />
                      </span>
                    </button>
                    <ul
                      className={`w-full transition-all duration-300 ease-in-out overflow-hidden  ${
                        index === activeMenuIndex
                          ? "max-h-[500px] opacity-1"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.links?.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.path}
                            className="flex gap-4 items-center justify-start py-2 pl-10 pr-4"
                          >
                            <span
                              className={`text-[0.8rem] ${
                                path === link.path
                                  ? "text-white"
                                  : "text-gray-200"
                              }`}
                            >
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <Link
          href="/profile"
          className="bg-[#A3248E] rounded-lg flex items-center px-3 py-2 gap-3 mb-10"
        >
          <div className="h-12 w-12 rounded-full bg-gray-500" />
          <div className="text-xs text-white">
            <p className="font-semibold text-sm">Nafisa Sh.</p>
            <p>Support manager</p>
          </div>
        </Link>
        <button
          className="absolute right-4 text-white tab:hidden inline-block"
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon icon={faClose} fontSize="25px" />
        </button>
      </nav>
      <div
        className={`fixed inset-0 z-20 backdrop-grayscale bg-white/30 transition-all ease-in-out ${
          open ? "block tab:hidden translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
