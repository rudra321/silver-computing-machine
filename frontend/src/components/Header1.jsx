import React, { useState } from "react";

const Header1 = ({setSelectedOption}) => {

  const [open, setOpen] = useState("");
  
  const handleOptionChange = (option) => {
    setOpen(option);
    setSelectedOption(option);
  };

  return (
    <div>
      <header className="bg-gray-100 flex">
      <button
          onClick={() => handleOptionChange("all")}
          className={
            open === "all"
              ? "p-4 text-2xl bg-white transition-colors duration-500 ease-in-out"
              : "p-4 text-2xl transition-colors duration-500 ease-in-out"
          }
        >
          All
        </button>
        <button
          onClick={() => handleOptionChange("completed")}
          className={
            open === "completed"
              ? "p-4 text-2xl bg-white transition-colors duration-500 ease-in-out"
              : "p-4 text-2xl transition-colors duration-500 ease-in-out"
          }
        >
          Completed
        </button>
        <button
          onClick={() => handleOptionChange("pending")}
          className={
            open === "pending"
              ? "p-4 text-2xl bg-white transition-colors duration-500 ease-in-out"
              : "p-4 text-2xl transition-colors duration-500 ease-in-out"
          }
        >
          Pending
        </button>
        <button
          onClick={() => handleOptionChange("archived")}
          className={
            open === "archived"
              ? "p-4 text-2xl bg-white transition-colors duration-500 ease-in-out"
              : "p-4 text-2xl transition-colors duration-500 ease-in-out"
          }
        >
          Archived
        </button>
      </header>
      <h1 className="p-6 m-6 text-5xl font-medium text-center font-sf">Tasks</h1>
    </div>
  );
};

export default Header1;
