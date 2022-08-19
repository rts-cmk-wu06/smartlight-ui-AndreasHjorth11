import logo from "../Ellipse 20.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
var ControlText = "Control";

const Header = () => {
  return (
    <motion.div
      animate={{ height: 160 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="text-white text-4xl font-bold h-80 flex content-center justify-between overflow-hidden relative"
    >
      <Link to="/" className="text-3xl ml-6 mt-16">
        {ControlText} <br /> Panel
      </Link>

      <motion.div
        animate={{ y: -120 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="h-40 bg-white/5 rounded-full w-40 absolute mt-[50px] -ml-10 z-0"
      ></motion.div>

      <motion.div
        animate={{ x: -50, y: -70 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="h-40 bg-white/5 rounded-full w-40 absolute mt-[200px] ml-[90px] z-0"
      ></motion.div>

      <div className="">
        <motion.div
          animate={{ y: 100 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="h-40 bg-white/5 rounded-full w-40 absolute mt-[-50px] ml-[50px] z-0"
        ></motion.div>
      </div>
      <div className="self-center">
        <div className="h-3 bg-pink-600 rounded-full w-3 absolute mt-10 ml-14 z-10"></div>
        <div className="h-3 bg-rose-700 rounded-full w-3 absolute mt-10 ml-14 z-10 animate-ping"></div>
        <img src={logo} className="scale-105 mt-6 mr-3"></img>
      </div>
    </motion.div>
  );
};

export default Header;
