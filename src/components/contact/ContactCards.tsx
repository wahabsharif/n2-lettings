"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

const contactData = [
  {
    icon: <AiOutlineHome className="text-4xl text-blue-500" />,
    title: "Head Office",
    detail: "30 Monarch Parade, London Road, Mitcham, CR4 3HA",
  },
  {
    icon: <AiOutlinePhone className="text-4xl text-green-500" />,
    title: "Phone",
    detail: "020 34170607",
  },
  {
    icon: <AiOutlineMail className="text-4xl text-purple-500" />,
    title: "Email",
    detail: "info@n2lettings.com",
  },
];

const ContactCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 cursor-pointer">
      {contactData.map((contact, index) => (
        <motion.div
          key={index}
          {...{
            className:
              "flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg w-64 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700",
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="mb-4">{contact.icon}</div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {contact.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            {contact.detail}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactCards;
