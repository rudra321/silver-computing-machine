import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {BsArrowRight} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TypewriterText = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [btn, setBtn] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const animateText = async() => {
      for(let i=0; i<= text.length; i++){
        await new Promise ((resolve) => 
        setTimeout(resolve, 100));
        setTypedText(text.slice(0, i));
      }
      setTimeout(()=>{
        setShowTitle(true);
        setTimeout(() => {
          setBtn(true);
        }, 1000)
      }, 1000)
    }

    animateText();
  }, [text])


  const handleExploreClick = () => {
    nav("/homepage", {replace: true})
  }
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        {!showTitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white font-sf text-5xl text-center m-1"
          >
            {typedText}
          </motion.p>
        )}
        {showTitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white font-sf text-5xl text-center m-1"
          >
            Simple Task Manager
          </motion.p>
        )}
        {btn && (
          <motion.button
            onClick={handleExploreClick}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-black bg-gray-100 px-4 py-2 font-bold font-sf text-3xl rounded-2xl flex items-center justify-center"
          >
            Explore
            <BsArrowRight className="h-6 w-6 ml-2"/>
          </motion.button>
        )}
      </div>
    </>
  );
};

export default TypewriterText;
