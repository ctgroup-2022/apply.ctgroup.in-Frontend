import React from 'react';
import { motion } from 'framer-motion';
import CourseCategory from './CourseCategory';

const CourseSection = ({ title, courses, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow"
    >
      <CourseCategory title={title} courses={courses} />
    </motion.div>
  );
};

export default CourseSection;
