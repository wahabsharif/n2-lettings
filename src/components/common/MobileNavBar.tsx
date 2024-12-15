"use client";

import React, { useState } from "react";
import { MenuItem, navBarData } from "@/data/navBarData";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { TiArrowSortedUp } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/images/logo/n2-logo.svg";

const MobileNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderSubMenu = (submenu: MenuItem[], index: number) => (
    <AnimatePresence>
      {openSubmenuIndex === index && (
        <motion.ul
          {...{ className: "pl-4 mt-2 space-y-1" }}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {submenu.map((item, subIndex) => (
            <li key={subIndex}>
              <a href={item.href} className="block">
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );

  return (
    <div className="bg-gray-100 mt-2 dark:bg-gray-800/70 backdrop-blur-md fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] z-50 rounded-xl shadow-lg transition ease-in-out md:hidden block">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Side Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={1000}
            height={1000}
            priority
            className="w-20"
          />
        </Link>

        <div className="flex">
          <button
            className="ml-2 px-3 py-2 bg-gray-700 rounded-xl text-gray-100"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              key={isMenuOpen ? "close-icon" : "menu-icon"}
            >
              {isMenuOpen ? (
                <ImCross className="" />
              ) : (
                <HiOutlineBars3BottomRight className="text-md font-bold" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            {...{ className: "overflow-hidden uppercase my-2" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="px-4 py-3 space-y-2">
              {navBarData.map((item, index) => (
                <li key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    {...{
                      className:
                        "flex justify-between items-center cursor-pointer",
                      onClick: () => toggleSubmenu(index),
                    }}
                  >
                    <div className="flex justify-between items-center w-full">
                      <h3 className="block">{item.label}</h3>
                      {item.submenu && (
                        <motion.div
                          {...{
                            className: "ml-2 text-gray-700 dark:text-gray-300",
                          }}
                          initial={{ rotate: 0 }}
                          animate={{
                            rotate: openSubmenuIndex === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <TiArrowSortedUp />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                  <h3>{item.submenu && renderSubMenu(item.submenu, index)}</h3>
                </li>
              ))}
              {/* <GetQuote /> */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
