import NumberTicker from "@/components/magicui/number-ticker";
import { FaTrophy, FaUsers, FaChartLine, FaStar } from "react-icons/fa";

export function Achievements() {
  const achievements = [
    { id: 1, icon: <FaTrophy />, title: "Awards", value: 50 },
    { id: 2, icon: <FaUsers />, title: "Users", value: 1000 },
    { id: 3, icon: <FaChartLine />, title: "Growth", value: 200 },
    { id: 4, icon: <FaStar />, title: "Ratings", value: 4.9 },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="flex flex-col items-center text-center bg-gray-100 p-10 rounded-lg shadow-md dark:bg-gray-800"
        >
          <div className="text-5xl text-thRed">{achievement.icon}</div>
          <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
            {achievement.title}
          </h3>
          <p className="mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            <NumberTicker value={achievement.value} />+
          </p>
        </div>
      ))}
    </div>
  );
}
