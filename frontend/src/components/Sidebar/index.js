import React, { useState } from "react";
import "../../css/main.css";
import "../Sidebar/sidebar.css";
import logo from "../../assets/Mediamodifier-Design.svg";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { FaHome, FaFemale, FaAngleRight, FaAngleBottom } from "react-icons/fa";

const Sidebar = ({ toggle, setToggle }) => {
  const navs = [
    {
      nav: "Email",
      link: "/Email",
      icon: <FaHome />,
    },
    {
      nav: "Chat",
      link: "/Chat",
      icon: <FaFemale />,
    },
    {
      nav: "Calendar",
      link: "/Calendar",
      icon: <FaFemale />,
    },
    {
      nav: "Email2",
      link: "/Email",
      icon: <FaFemale />,
    },
    {
      nav: "Invoice",
      link: "/Invoice",
      icon: <FaFemale />,
      isMulti: true,
      types: [
        {
          nav: "List",
          link: "/List",
        },
        {
          nav: "Preview",
          link: "/Preview",
        },
        {
          nav: "Edit",
          link: "/Edit",
        },
        {
          nav: "Add",
          link: "/Add",
        },
      ],
    },
    {
      nav: "User",
      link: "/User",
      icon: "FaFemale",
    },
    {
      nav: "Role & Permissions",
      link: "/Role-and-Permissions",
    },
  ];
  const [menuTriger, setMenutriger] = useState({
    Home: false,
    Invoice: false,
  });
  console.log("navs", navs);
  return (
    <>
      <div
        className={
          toggle
            ? "bg-blue-950 h-full fixed	w-72 border-r-2 border-solid border-cyan-50 transition"
            : "bg-blue-950 h-full fixed pl-288 w-72 sidebar-scroll transition"
        }
      >
        <div className="w-72">
          <div className="flex gap-5 items-center pl-5 pr-5 pt-5 pb-5 relative">
            <div className="w-8">
              <img className="" src={logo} alt="" />
            </div>
            <div className="flex">
              <h1 className="text-2xl text-white font-bold	">MERNscape</h1>
            </div>
            <div className="tggleButton absolute top-0 right-2">
              <button onClick={() => setToggle(!toggle)}>
                {toggle ? <BsArrowLeftSquare /> : <BsArrowRightSquare />}
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden overflow-y-scroll sidebar-scroll h-full">
          <div class="pr-5 pl-5">
            <div className="">
              <div className="dashboard">
                <div
                  onClick={() =>
                    setMenutriger({ ...menuTriger, Home: !menuTriger.Home })
                  }
                  className="cursor-pointer relative pt-1 pb-1 pl-2 pr-2 bg-orange-200-cst rounded-md"
                >
                  <div className="flex items-center gap-2 ">
                    <FaHome value={{ color: "#aaaaaa", size: "50px" }} />
                    <h3 className="text-slate-400">Dashboard</h3>
                    <div
                      className={
                        menuTriger.Home
                          ? "absolute right-3 rotate-90 transition-all"
                          : "absolute right-3 transition-all"
                      }
                    >
                      <FaAngleRight />
                    </div>
                  </div>
                </div>
                {menuTriger.Home ? (
                  <ul className="list-disc pl-5 mt-4">
                    <li className="pl-2 mb-2 text-slate-400	">Dashboard</li>
                    <li className="pl-2 mb-2 text-slate-400	">Dashboard</li>
                    <li className="pl-2 mb-2 text-slate-400	">Dashboard</li>
                  </ul>
                ) : null}
              </div>
              <div className="App_and_pages">
                <h2 className="menu_title text-slate-400 text-xs mt-5 mb-2">
                  Apps and Pages
                </h2>
                <div className="cursor-pointer relative pt-1 pb-1 pl-2 pr-2">
                  {navs.map((item, index) => (
                    <div key={index}>
                      {item.isMulti ? (
                        <>
                          <div
                            onClick={() =>
                              setMenutriger({
                                ...menuTriger,
                                Invoice: !menuTriger.Invoice,
                              })
                            }
                            className="cursor-pointer relative pt-1 pb-1 pl-2 pr-2 bg-orange-200-cst rounded-md"
                          >
                            <div className="flex items-center gap-2 ">
                              <FaHome
                                value={{ color: "#aaaaaa", size: "50px" }}
                              />
                              {item.icon}
                              <h3>{item.nav}</h3>
                              <div
                                className={
                                  menuTriger.Invoice
                                    ? "absolute right-3 rotate-90 transition-all"
                                    : "absolute right-3 transition-all"
                                }
                              >
                                <FaAngleRight />
                              </div>
                            </div>
                          </div>
                          {menuTriger.Invoice ? (
                            <ul className="list-disc pl-5 mt-4">
                              <li className="pl-2 mb-2 text-slate-400	">
                                Dashboard
                              </li>
                              <li className="pl-2 mb-2 text-slate-400	">
                                Dashboard
                              </li>
                              <li className="pl-2 mb-2 text-slate-400	">
                                Dashboard
                              </li>
                            </ul>
                          ) : null}
                        </>
                      ) : (
                        <div onClick={() => setMenutriger(!menuTriger)}>
                          <div className="">
                            {item.icon}
                            <h3>{item.nav}</h3>
                          </div>

                          <div
                            className={
                              menuTriger
                                ? "absolute right-3 rotate-90 transition-all"
                                : "absolute right-3 transition-all"
                            }
                          >
                            <FaAngleRight />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
