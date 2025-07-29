"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  glass?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, glass = false, ...props }, ref) => {
    return (
      <motion.textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-xl border border-input px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
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
Textarea.displayName = "Textarea";

export { Textarea };