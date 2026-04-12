"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const dropInVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const SectionAds = () => {
  return (
    <div className="container mx-auto lg:mt-8 md:mt-44 mt-64">
      <div className="flex flex-col md:flex-row gap-8 px-3 lg:px-28">
        <motion.div
          className="group overflow-hidden relative rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          variants={dropInVariants}
        >
          <Image
            src="/home/1.jpg"
            alt=""
            width={1260}
            height={590}
            className="rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
        <motion.div
          className="group overflow-hidden relative rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          variants={dropInVariants}
        >
          <Image
            src="/home/2.jpg"
            alt=""
            width={1260}
            height={590}
            className="rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionAds;
