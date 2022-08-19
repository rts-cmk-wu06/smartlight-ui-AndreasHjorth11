// import Slider from 'react-input-slider';
import Slider from "rc-slider";
import "./SliderControl.css";
import Color from "./Controls/Bed Room/Color";
import "rc-slider/assets/index.css";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import _ from "lodash";

function Controls() {
  const [brightness, setBrightness] = useState(50);

  const changeBri = (value) => {
    setBrightness(value);
    console.log(value);
  };

  const throttle = useMemo(() => _.throttle(changeBri, 1000), []);
  // const [state, setState] = useState({ x: 10 });
  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/qjFRqc--SdeaB4gl-cYIb96qmqVY2ydjUsz0usAv/groups/2/action",
      {
        method: "PUT",
        body: JSON.stringify({
          bri: brightness,
        }),
      }
    );
  }, [brightness]);

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/qjFRqc--SdeaB4gl-cYIb96qmqVY2ydjUsz0usAv/groups/2/action",
      {
        method: "PUT",
        body: JSON.stringify({
          xy: [0.3227, 0.329],
          on: true,
        }),
      }
    );
  }, []);

  return (
    <div className="relative">
      <motion.div
        animate={{ y: 80 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="bg-light-white h-height-656 w-full rounded-t-3xl -mt-40"
      >
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-2xl font-bold ml-6 relative top-8 opacity-0"
        >
          Intensity
        </motion.div>
        <div className="h-16 w-86 mt-10 flex justify-evenly items-center">
          <FaRegLightbulb className="text-gray-400 h-6"></FaRegLightbulb>
          <div>
            <div className="Slider-Container">
              <Slider
                defaultValue={brightness}
                min={0}
                max={255}
                onChange={throttle}
                className="Slider"
              />
            </div>
          </div>
          <FaRegLightbulb className="text-yellow-500 h-6"></FaRegLightbulb>
        </div>
        <div className="h-16 w-86 mt-4">
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-2xl font-bold ml-6 relative opacity-0"
          >
            Colors
          </motion.div>
          <div className="mt-8 flex ml-6">
            <motion.div
              animate={{ x: 10 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Color
                r="255"
                g="185"
                b="0"
                className="h-6 w-6 rounded-full z-10"
              />
            </motion.div>
            <motion.div
              animate={{ x: 25 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Color
                r="245"
                g="222"
                b="179"
                // className="h-6 w-6 bg-red-400 rounded-full z-10"
              />
            </motion.div>
            <motion.div
              animate={{ x: 40 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Color
                r="255"
                g="0"
                b="0"
                // className="h-6 w-6 bg-red-400 rounded-full z-10"
              />
            </motion.div>
            <motion.div
              animate={{ x: 55 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Color
                r="255"
                g="20"
                b="147"
                // className="h-6 w-6 bg-red-400 rounded-full z-10"
              />
            </motion.div>
            <motion.div
              animate={{ x: 70 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Color
                r="139"
                g="0"
                b="139"
                // className="h-6 w-6 bg-red-400 rounded-full z-10"
              />
            </motion.div>
            <motion.div
              animate={{ x: 85 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Color
                r="25"
                g="25"
                b="122"
                // className="h-6 w-6 bg-red-400 rounded-full z-10"
              />
            </motion.div>
            <motion.div
              animate={{ x: 100 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Color
                r="0"
                g="0"
                b="255"
                // className="h-6 w-6 bg-red-400 rounded-full z-10"
              />
            </motion.div>

            <motion.button
              animate={{ x: 130 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="h-6 w-6 bg-gray-200 rounded-full text-center font-semibold z-50 -ml-2"
            >
              +
            </motion.button>
          </div>
        </div>

        <div className="h-16 w-86 mt-16">
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-2xl font-bold ml-6 relative opacity-0"
          >
            Scenes
          </motion.div>
          <div className="h-36 ml-6 mt-8">
            <button className="bg-gradient-to-r from-rose-500 to-red-400 w-36 h-16 text-white rounded-2xl z-10 font-bold">
              <div className="flex gap-5 justify-start ml-4">
                <HiOutlineLightBulb className="text-2xl" />
                Birthday
              </div>
            </button>
            <motion.button
              animate={{ x: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="bg-gradient-to-r from-violet-500 to-pink-400 w-36 h-16 text-white rounded-2xl z-20 -ml-6 font-bold"
            >
              <div className="flex gap-7 justify-start ml-4">
                <HiOutlineLightBulb className="text-2xl" />
                Party
              </div>
            </motion.button>
            <button className="bg-gradient-to-r from-sky-500 to-cyan-400 w-36 h-16 text-white rounded-2xl z-10 mt-6 font-bold">
              <div className="flex gap-6 justify-start ml-4">
                <HiOutlineLightBulb className="text-2xl" />
                Relax
              </div>
            </button>
            <motion.button
              animate={{ x: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="bg-gradient-to-r from-emerald-400 to-lime-400 w-36 h-16 text-white rounded-2xl z-20 -ml-6 font-bold"
            >
              <div className="flex gap-7 justify-start ml-4">
                <HiOutlineLightBulb className="text-2xl" />
                Fun
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Controls;
