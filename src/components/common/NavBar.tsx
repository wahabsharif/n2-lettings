"use client";

import React, { useState } from "react";
import { navBarData } from "@/data/navBarData";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowSortedDown } from "react-icons/ti";
import ThemeToggle from "./ThemeToggle";
import { FaSearch } from "react-icons/fa";
import Logo from "@/assets/images/logo/n2-logo.svg";
import { CgLogIn } from "react-icons/cg";

const NavBar: React.FC = () => {
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState<number | null>(null);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800/70 backdrop-blur-md fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] z-50 rounded-xl shadow-lg hidden md:block transition ease-in-out">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Side: Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={1000}
            height={1000}
            priority
            className="w-28"
          />
        </Link>

        {/* Center: Menu */}
        <div className="relative">
          <ul className="flex space-x-6">
            {navBarData.map((menuItem, index) => (
              <motion.li
                key={menuItem.label}
                {...{
                  onMouseEnter: () =>
                    menuItem.submenu && setSubmenuOpenIndex(index),
                  onMouseLeave: () => setSubmenuOpenIndex(null),
                  className: "relative group text-black dark:text-white",
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={menuItem.href}>
                  <motion.div
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    {...{ className: "flex items-center " }}
                  >
                    {menuItem.label}
                    {/* Arrow Icon - Appears when submenu exists */}
                    {menuItem.submenu && (
                      <motion.div
                        {...{ className: "ml-1" }}
                        initial={{ rotate: 0 }}
                        animate={{
                          rotate: submenuOpenIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <TiArrowSortedDown />
                      </motion.div>
                    )}
                  </motion.div>
                </Link>
                {/* Submenu */}
                <AnimatePresence>
                  {menuItem.submenu && submenuOpenIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      {...{ className: "absolute left-0 mt-2 w-48 space-y-1" }}
                    >
                      {menuItem.submenu.map((submenuItem) => (
                        <motion.li
                          key={submenuItem.label}
                          whileHover={{
                            scale: 1.1,
                          }}
                          transition={{ type: "spring", stiffness: 200 }}
                          {...{
                            className:
                              "bg-gray-100 dark:bg-gray-800 backdrop-blur-md rounded-xl shadow-lg ",
                          }}
                        >
                          <Link
                            href={submenuItem.href}
                            className="block px-4 py-2"
                          >
                            {submenuItem.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: Button */}
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <button className="p-2 flex justify-center items-center uppercase text-lg font-semibold tracking-widest rounded-xl focus:outline-none bg-gray-700 text-white">
              <CgLogIn className="mr-2" size={24} />
              Login
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <button className="p-2 rounded-xl focus:outline-none bg-gray-700 text-white">
              <FaSearch size={24} />
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
