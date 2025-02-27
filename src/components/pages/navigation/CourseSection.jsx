import React, { useState, useMemo } from "react";
import { X, Search } from "lucide-react";

function CourseSection({ onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = {
    after12: [
      "Bachelor in Architecture (B.Arch)",
      "Bachelor of Science in Medical Laboratory Science (B.Sc. MLS)",
      "Bachelor of Arts and Bachelor of Legislative Law (B.A. LLB)",
      "Bachelor of Commerce and Bachelor of Legislative Law (B.Com. LLB)",
      "Bachelor of Vocational Education in Interior Design (B.Voc. Interior Designing)",
      "Bachelor of Technology in Electronics and Communication Engineering/Computer Science and Engineering (B.TECH-ECE/CSE (IKGPTU))",
      "Bachelor of Technology in Civil Engineering or Mechanical Engineering (B.TECH-CE/ME (IKGPTU))",
      "Bachelor of Technology in Lateral Entry (B.TECH (LEET))",
      "Bachelor of Science in Hospitality and Hotel Administration (B.Sc. HHA)",
      "Craftsmanship Certificate Course in Food Production and Patisserie (CCFP)",
      "Bachelor of Hotel Management and Catering Technology (BHMCT)",
      "Bachelor of Vocation in Hospitality and Catering Management (B.Voc (HCM))",
      "Diploma in Food Production (DFP)",
      "Bachelor of Tourism and Travel Management (BTTM)",
      "Bachelor of Science in Fashion Designing (B.Sc. F.D)",
      "Bachelor of Vocational in Beauty Therapy and Aesthetics (B.Voc (BTA))",
      "(CTIPS) Bachelor of Pharmacy (B.PHARM)",
      "(CTCP) Bachelor of Pharmacy (B.PHARM)",
      "(CTIPS) Bachelor of Pharmacy in Lateral Entry (B.PHARM (LEET))",
      "(CTCP) Bachelor of Pharmacy in Lateral Entry (B.PHARM (LEET))",
      "(CTIPS) Diploma in Pharmacy (D.PHARM)",
      "(CTCP) Diploma in Pharmacy (D.PHARM)",
      "Bachelor of Science in Biotechnology (B.Sc Biotech)",
      "(CTIPS) Doctor of Pharmacy (Pharm.D.)",
      "Bachelor of Commerce (B.Com.)",
      "Bachelor in Business Administration (BBA)",
      "Bachelor of Arts (B.A)",
      "Bachelor of Arts in Journalism and Mass Communication (BAJMC)",
      "Bachelor in Physiotherapy (BPT)",
      "Bachelor of Computer Application (BCA)",
      "Bachelor of Vocation in Software Development (B.Voc (SD))",
      "Bachelor of Technology in Artificial Intelligence and Machine Learning (B.Tech (AI & ML))",
      "(CTCP) Doctor of Pharmacy (Pharm.D.)",
      "Bachelor of Business Administration (BBA)",
      "Bachelor of Commerce (Honours) (B.Com Hons)",
      "(CTIMT) Bachelors of Computer Applications (BCA)",
      "Bachelors of Science Animation and Multimedia (BSc (A&M))",
    ],
    afterGraduation: [
      "(CTIPS) Master of Pharmacy in Pharmaceutics (M.Pharm)",
      "(CTIPS) Master of Pharmacy in Pharmacology (M.Pharm)",
      "Master of Technology in Computer Science Engineering/Mechanical Engineering (M.TECH CSE/ME)",
      "Master of Business Administration with a specialization in Human Resources/Finance/Marketing (MBA HR/FINANCE/MARKETING)",
      "Master Of Computer Applications (MCA)",
      "Bachelor of Education under Guru Nanak Dev University (B.Ed GNDU)",
      "Master of Hospitality Management & Catering Technology (MHMCT)",
      "Master of Science in Fashion Designing (M.Sc. Fashion Designing)",
      "Master of Science in Biotechnology (M.Sc Biotechnology)",
      "(CTIPS) Masters of Pharmacy in Pharmaceutical Chemistry (M.Pharma)",
      "(CTIPS) Doctor Of Pharmacy (PHARM.D Post-Baccalaureate)",
      "(CTCP) Doctor Of Pharmacy (PHARM.D Post-Baccalaureate)",
      "(CTCP) Master of Pharmacy in Pharmaceutics (M.Pharm)",
      "(CTCP) Master of Pharmacy in Pharmacology (M.Pharm)",
      "(CTCP) Masters of Pharmacy in Pharmaceutical Chemistry (M.Pharma)",
      "Diploma in Elementary Education (D.EL.ED.)",
    ],
    afterMatric: [
      "Diploma in Computer Science Engineering (CSE)",
      "Diploma in Electronics & Communication Engineering (ECE)",
      "Diploma in Mechanical Engineering (ME)",
      "Diploma in Electrical Engineering (EE)",
      "Diploma in Civil Engineering (CE)",
      "Diploma in Medical Laboratory Technology (DMLT)",
    ],
  };

  const filteredCourses = useMemo(() => {
    if (!searchTerm) return courses;

    const searchLower = searchTerm.toLowerCase();
    return {
      after12: courses.after12.filter((course) =>
        course.toLowerCase().includes(searchLower)
      ),
      afterGraduation: courses.afterGraduation.filter((course) =>
        course.toLowerCase().includes(searchLower)
      ),
      afterMatric: courses.afterMatric.filter((course) =>
        course.toLowerCase().includes(searchLower)
      ),
    };
  }, [searchTerm]);

  const hasResults = Object.values(filteredCourses).some(
    (section) => section.length > 0
  );

  return (
    <div className="fixed inset-0 bg-gray-50/95 z-50">
      <div className="w-full h-full">
        <div className="bg-white h-screen">
          {/* Fixed Header */}
          <div className="sticky top-0 bg-white z-20 border-b px-6 py-3 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-blue-900">Programs</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4" />
            </div>
          </div>

          {/* Mobile-optimized scrollable content */}
          <div
            className="h-[calc(100vh-80px)] overflow-y-auto overscroll-contain"
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "-ms-autohiding-scrollbar",
            }}
          >
            {!hasResults && searchTerm && (
              <div className="p-6 text-center text-gray-500">
                No courses found matching "{searchTerm}"
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 pb-20 md:pb-3">
              {Object.entries(filteredCourses).map(
                ([key, courses]) =>
                  courses.length > 0 && (
                    <div
                      key={key}
                      className="space-y-2 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-blue-900 sticky top-0 bg-white py-2 z-10 backdrop-blur-sm bg-white/90">
                        {key === "after12"
                          ? "After +2/Diploma"
                          : key === "afterGraduation"
                          ? "After Graduation"
                          : "After Matric"}
                      </h3>
                      <div className="space-y-1 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-gray-300">
                        {courses.map((course, index) => (
                          <div
                            key={index}
                            className="p-1.5 hover:bg-gray-50 rounded text-sm"
                          >
                            <span className="text-gray-700 hover:text-blue-600">
                              {course}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
