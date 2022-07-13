import React from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaHome,  FaPeopleArrows, FaMoneyBillAlt } from "react-icons/fa";
import {  BiSearch } from "react-icons/bi";
import { BsGeoAltFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Header from '../Navbar/Header';
import './App.css';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalculateIcon from '@mui/icons-material/Calculate';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { AiOutlineAudit } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/master",
    name: "Master",
    icon: <CorporateFareIcon />,
    subRoutes: [
      {
        path: "/master/party",
        name: "Party ",
        icon: <FaPeopleArrows />,
      },
      {
        path: "/master/geography",
        name: "Geography",
        icon: <BsGeoAltFill />,
      },
      {
        path: "/master/service",
        name: "Service",
        icon: <RiServiceFill />,
      },
      {
        path: "/master/rate",
        name: "Rate",
        icon: <FaMoneyBillAlt />,
      },
    ],
  },
  {
    path: "/ratefinder",
    name: "Rate Finders",
    icon: <QueryStatsIcon />,
  },
  {
    path: "/ratecalculator",
    name: "Rate Calculator",
    icon: <CalculateIcon />,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <AssessmentIcon />,
  },
  {
    path: "/audit",
    name: "Audit",
    icon: <AiOutlineAudit />,
  },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
        <Header/>
      <div className="main-container">
       <div className="bg-gray-50 shadow-xl text-xl text-grey-100" > 
       <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <h3 className='text-gray-600'>Dashboard</h3>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars text-red-400 cursor-pointer">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search ">
            <div className="search_icon text-red-400">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes ">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon text-red-400">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
      
        </motion.div>
       </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
