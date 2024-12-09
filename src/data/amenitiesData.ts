// src/data/amenitiesData.ts
import { FaSwimmingPool, FaCoffee, FaWifi, FaRegSun } from "react-icons/fa"; // Importing icons from react-icons
import { CgGym, CgSmartphone } from "react-icons/cg"; // Importing more icons
import { IoFastFood } from "react-icons/io5";
import { TbBeach } from "react-icons/tb";

export const amenitiesData = [
  {
    id: 1,
    icon: FaSwimmingPool,
    title: "Swimming Pool",
    description: "Enjoy a relaxing time by the pool.",
  },
  {
    id: 2,
    icon: CgGym,
    title: "Gym",
    description: "State-of-the-art fitness equipment.",
  },
  {
    id: 3,
    icon: FaCoffee,
    title: "Cafe",
    description: "Café for snacks and drinks.",
  },
  {
    id: 4,
    icon: FaWifi,
    title: "Free WiFi",
    description: "Stay connected with high-speed internet.",
  },
  {
    id: 5,
    icon: FaRegSun,
    title: "Sun Deck",
    description: "Relax and soak up the sun.",
  },
  {
    id: 6,
    icon: TbBeach,
    title: "Beach Access",
    description: "Private beach access for guests.",
  },
  {
    id: 7,
    icon: CgSmartphone,
    title: "Smart Devices",
    description: "In-room smart devices for a tech-savvy stay.",
  },
  {
    id: 8,
    icon: IoFastFood,
    title: "Room Service",
    description: "Delicious food delivered right to your room.",
  },
];
