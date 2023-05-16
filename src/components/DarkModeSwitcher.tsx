import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
      onClick={() => {
        setTheme(isDarkMode ? "light" : "dark");
      }}
    >
      {isDarkMode ? (
        <SunIcon className=" w-6 h-6 text-yellow-500 shadow-black" />
      ) : (
        <MoonIcon className=" w-6 h-6 text-gray-600" />
      )}
    </button>
  );
};

export default DarkModeSwitcher;
