"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, glass = false, ...props }, ref) => {
    return (
      <motion.input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-input px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          glass 
            ? "bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/70" 
            : "bg-background",
          className
        )}
        ref={ref}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };