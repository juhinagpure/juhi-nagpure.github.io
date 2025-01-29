"use client";
import { motion } from "framer-motion";
import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";

export default function Contact() {
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
        <EnvelopeSimple size={32} weight="thin" className="mr-2" />
        <h1 className="text-3xl font-bold">Contact Me</h1>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-pink-200 rounded-[20px] p-6"
      >
        <div className="flex items-center mb-4">
          <EnvelopeSimple size={24} weight="thin" className="mr-2" />
          <p>julia.huang@example.com</p>
        </div>
        <div className="flex items-center mb-4">
          <Phone size={24} weight="thin" className="mr-2" />
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="flex items-center">
          <MapPin size={24} weight="thin" className="mr-2" />
          <p>San Francisco, CA</p>
        </div>
      </motion.div>
    </motion.main>
  );
}
