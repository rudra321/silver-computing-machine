import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BsArrowRight, BsCheckCircle, BsPlus } from "react-icons/bs";
const AddTasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addTaskBtn, setAddTaskBtn] = useState(false);
  const componentRef = useRef(null);

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/tasks", {
        title: title,
        description: description,
      });
      setTitle("");
      setDescription("");
      setAddTaskBtn(false);
    } catch (error) {
      console.log("Error adding tasks: ", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target) &&
        event.target !== document.querySelector(".modal-open-btn")
      ) {
        setAddTaskBtn(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {addTaskBtn && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          <div
            ref={componentRef}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-20"
          >
            <input
              className="w-full max-w-full p-3 mb-4 text-lg placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full max-w-full p-3 mb-4 text-lg placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              onClick={handleClick}
              className="flex items-center justify-center w-full p-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
            >
              <BsCheckCircle size={24} className="mr-2" />
              Submit
            </button>
          </div>
        </>
      )}
      <button
        onClick={() => setAddTaskBtn(!addTaskBtn)}
        className="fixed p-3 bottom-5 right-5 flex items-center justify-center text-lg font-semibold text-black bg-gray-100 rounded-2xl shadow-md focus:outline-none focus:none focus: modal-open-btn"
      >
        {addTaskBtn ? <BsArrowRight size={24} /> : "New Task" }
      </button>
    </div>
  );
};

export default AddTasks;
