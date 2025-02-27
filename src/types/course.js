// Define CourseProps as a plain JavaScript object structure
export const CourseProps = {
  title: "",
  courses: []
};

// Define CourseSectionProps, extending CourseProps, and adding a delay property
export const CourseSectionProps = {
  ...CourseProps,
  delay: 0
};

// Define CourseDropdownProps as a plain JavaScript object structure
export const CourseDropdownProps = {
  isOpen: false,
  onClose: () => {}
};
