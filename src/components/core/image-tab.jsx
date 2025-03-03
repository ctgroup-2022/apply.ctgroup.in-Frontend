"use client";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { useMediaQuery } from "../../hooks/use-media-query";

// Create a Context for Tabs
const TabsContext = createContext(undefined);

// Custom Hook to use Tabs Context
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context;
};

// Tabs Provider Component
export function TabsProvider({ children, defaultValue, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isDesktop }}>
      <div className={cn("w-full h-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

// Tab List Component
export function TabList({ children, className }) {
  return <div className={cn("rounded-sm h-fit", className)}>{children}</div>;
}

// Tab Item Component
export function TabItem({ children, value }) {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <motion.div
      className={`rounded-lg overflow-hidden mb-2 cursor-pointer transition-all border-2 
        ${
          activeTab === value
            ? "border-[#F2F2F2] dark:border-[#656fe2] dark:bg-[#E0ECFB] bg-[#F2F2F2]"
            : "bg-transparent dark:hover:border-[#656fe2] hover:border-gray-300"
        }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </motion.div>
  );
}

// Tab Header Component
export function TabHeader({ children, value }) {
  const { activeTab } = useTabs();

  return (
    <h2
      className={`p-4 cursor-pointer transition-all font-semibold flex justify-between items-center 
        dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black 
        ${
          activeTab === value
            ? "dark:bg-[#1e2a78] bg-[#F2F2F2]"
            : "dark:bg-[#11112b] bg-white"
        }`}
    >
      {children}
    </h2>
  );
}

// Tab Description Component
export function TabDes({ children, value }) {
  const { activeTab } = useTabs();

  return (
    <AnimatePresence mode="wait">
      {activeTab === value && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.14 }}
        >
          <div className="dark:bg-white bg-[#F2F2F2] text-black p-3">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Tab Image Container Component
export function TabImageContainer({ children, className }) {
  return (
    <div className={cn("", className)}>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
}

// Tab Image Component (Fixed ForwardRef Issue)
export const TabImage = React.forwardRef(({ children, value }, ref) => {
  const { activeTab, isDesktop } = useTabs();

  if (activeTab !== value || !isDesktop) return null;

  return (
    <motion.div ref={ref} className="p-4 h-[500px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

// Add Display Name for Dev Tools
TabImage.displayName = "TabImage";
