"use client";
import { motion } from "framer-motion";
import { User } from "phosphor-react";

export default function About() {
  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center mb-6"
      >
        <User size={32} weight="thin" className="mr-2" />
        <h1 className="text-3xl font-bold">About Me</h1>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-pink-200 rounded-[20px] p-6"
      >
        <p className="mb-4">
          Hello! I'm Juhi, a passionate frontend developer with a keen eye for
          design and a love for creating seamless user experiences.
        </p>
        <p>
          With expertise in React, Next.js, and modern web technologies, I
          strive to build responsive and accessible web applications that make a
          difference.
        </p>
      </motion.div>
    </motion.main>
  );
}
