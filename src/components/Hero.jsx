"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center relative"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/rafi_img.jpg"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="sm:h-[256px] sm:w-[256px] rounded-full object-cover transition-colors"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>

          <h1 className="text-center text-4xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            My Name is Tanvir Rahman Rafi &
          </h1>
          <p className="text-3xl mt-3 mb-4 font-bold tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            I am a Fullstack Web Developer 🤗
          </p>
        </motion.div>

        {/* Hero Icons */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex justify-center gap-x-10 text-yellow-600"
        >
          {heroIcons.map((item, i) => (
            <a
              href={item.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-4 
                transition-all duration-300 transform 
                hover:scale-125 hover:drop-shadow-[0_0_10px_#facc15] 
                ${item.color} hover:text-red-600
                text-3xl       /* Default icon size */
                sm:text-4xl    /* Increase for small devices */
                md:text-3xl    /* Keep same for tablet and above */
              `}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* Talk to me button */}
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#"
          rel="noopener noreferrer"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-4 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          Talk to me
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
