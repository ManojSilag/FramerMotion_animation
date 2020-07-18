import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const bottomVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    BoxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3
    }
  }
};

const containerVarient = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={bottomVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>

    </motion.div>
  );
};

export default Home;
