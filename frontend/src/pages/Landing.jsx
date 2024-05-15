import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import TypewriterText from "../components/Typewriter";
const Landing = () => {
  return (
    <section className="h-screen bg-black flex justify-center items-center">
        <TypewriterText text="Managing Tasks Has Never Been Easier"/>
    </section>
  );
};

export default Landing;
