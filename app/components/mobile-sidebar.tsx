"use client";

import Link from "next/link";
import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <button
        className="sm:hidden text-gray-800 hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <List size={24} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-x-0 bottom-0 bg-pink-200 p-6 rounded-t-[20px] shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/projects"
                    className="block text-gray-800 hover:text-gray-600 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-gray-800 hover:text-gray-600 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-gray-800 hover:text-gray-600 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
