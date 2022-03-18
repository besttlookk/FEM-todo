import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const Filter = () => {
  const { filterMode, setFilterMode } = useContext(AppContext);

  return (
    <div className="flex items-center justify-center px-4 py-4 mt-8 space-x-6 font-semibold shadow-lg font-primary md:text-lg bg-lm-secondry dark:bg-dm-secondary ">
      <button
        onClick={() => setFilterMode("all")}
        className={`${
          filterMode === "all"
            ? "text-primary"
            : "text-lm-text-fade dark:text-dm-text-fade hover:text-gray-800 dark:hover:text-white"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilterMode("active")}
        className={`${
          filterMode === "active"
            ? "text-primary"
            : "text-lm-text-fade dark:text-dm-text-fade hover:text-gray-800 dark:hover:text-white"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilterMode("completed")}
        className={`${
          filterMode === "completed"
            ? "text-primary"
            : "text-lm-text-fade dark:text-dm-text-fade hover:text-gray-800 dark:hover:text-white"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
