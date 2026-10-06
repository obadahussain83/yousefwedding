"use client";

import { motion } from "framer-motion";

// مؤشر "اسحب للأسفل" واضح وأنيق — نص صغير مع سهم بينساب لتحت بهدوء
export default function ScrollHint() {
  return (
    <div
      className="absolute bottom-5 inset-x-0 flex flex-col items-center gap-1.5 pointer-events-none text-gold-dark/90 drop-shadow-sm"
      aria-hidden
    >
      <p className="text-sm font-semibold tracking-[0.2em]">اسحب للأسفل</p>
      <motion.svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        animate={{ y: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
}
