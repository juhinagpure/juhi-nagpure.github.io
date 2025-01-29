"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      className="z-50 mb-5 flex items-center justify-between p-4 lg:p-6 bg-pink-200 rounded-[20px]"
    >
      <Link href="/" className="text-base font-medium tracking-tight">
        <div className="flex flex-row gap-1">
          <span className="font-semibold">JUHI</span>
          <span className="font-light italic">NAGPURE</span>
        </div>
      </Link>

      <div>
        <span className="font-medium flex gap-1.5 items-center">
          Frontend Developer
        </span>
      </div>

      {/* <nav className="hidden sm:block">
        <ul className="flex gap-8">
          <li>
            <Link
              href="/projects"
              className="hover:opacity-70 transition-opacity"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:opacity-70 transition-opacity"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <MobileSidebar /> */}
    </motion.header>
  );
}
