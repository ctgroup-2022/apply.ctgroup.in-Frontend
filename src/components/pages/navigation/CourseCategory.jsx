import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CourseCategory = ({ title, courses }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-[#1a237e] pb-2 border-b-2 border-[#1a237e]/20">
        {title}
      </h2>
      <motion.ul className="space-y-1.5">
        {courses.map((course, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <a
              href="#"
              className="group flex items-center justify-between text-gray-700 hover:text-[#1a237e] py-1.5 px-2 rounded-lg hover:bg-[#1a237e]/5 transition-all duration-200"
            >
              <span className="text-sm font-medium">{course}</span>
              <ChevronRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CourseCategory;
