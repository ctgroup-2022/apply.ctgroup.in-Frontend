import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseSection from './CourseSection';
import { afterDiploma, afterGraduation, afterMatric } from '../../data/courses';

const CourseDropdown = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-gray-900/10 backdrop-blur-sm z-40"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full h-[85vh] bg-white/95 pt-16 pb-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#1a237e]">Our Courses</h1>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={onClose}
                  className="p-2 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </motion.button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <CourseSection title="After +2/Diploma" courses={afterDiploma} delay={0.2} />
                <CourseSection title="After Graduation" courses={afterGraduation} delay={0.3} />
                <CourseSection title="After Matric" courses={afterMatric} delay={0.4} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseDropdown;
