"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Sun, Moon, Sparkles } from "lucide-react";
import { db, collection, addDoc } from "../../firebase/firebase";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import ReCAPTCHA from "react-google-recaptcha";

Modal.setAppElement("#root");

const FORM_COLLECTION = "form_submissions";

export default function SignUpForm() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    campus: "",
    course: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Manage button disabled state

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Puducherry"
  ];

  const campuses = ["Shapur", "Maqsudan"];

  const allCourses = {
    after12: [
      'Bachelor in Architecture (B.Arch)',
      'Bachelor of Science in Medical Laboratory Science (B.Sc. MLS)',
      'Bachelor of Arts and Bachelor of Legislative Law (B.A. LLB)',
      'Bachelor of Commerce and Bachelor of Legislative Law (B.Com. LLB)',
      'Bachelor of Vocational Education in Interior Design (B.Voc. Interior Designing)',
      'Bachelor of Technology in Electronics and Communication Engineering/Computer Science and Engineering (B.TECH-ECE/CSE (IKGPTU))',
      'Bachelor of Technology in Civil Engineering or Mechanical Engineering (B.TECH-CE/ME (IKGPTU))',
      'Bachelor of Technology in Lateral Entry (B.TECH (LEET))',
      'Bachelor of Science in Hospitality and Hotel Administration (B.Sc. HHA)',
      'Craftsmanship Certificate Course in Food Production and Patisserie (CCFP)',
      'Bachelor of Hotel Management and Catering Technology (BHMCT)',
      'Bachelor of Vocation in Hospitality and Catering Management (B.Voc (HCM))',
      'Diploma in Food Production (DFP)',
      'Bachelor of Tourism and Travel Management (BTTM)',
      'Bachelor of Science in Fashion Designing (B.Sc. F.D)',
      'Bachelor of Vocational in Beauty Therapy and Aesthetics (B.Voc (BTA))',
      '(CTIPS) Bachelor of Pharmacy (B.PHARM)',
      '(CTCP) Bachelor of Pharmacy (B.PHARM)',
      '(CTIPS) Bachelor of Pharmacy in Lateral Entry (B.PHARM (LEET))',
      '(CTCP) Bachelor of Pharmacy in Lateral Entry (B.PHARM (LEET))',
      '(CTIPS) Diploma in Pharmacy (D.PHARM)',
      '(CTCP) Diploma in Pharmacy (D.PHARM)',
      'Bachelor of Science in Biotechnology (B.Sc Biotech)',
      '(CTIPS) Doctor of Pharmacy (Pharm.D.)',
      'Bachelor of Commerce (B.Com.)',
      'Bachelor in Business Administration (BBA)',
      'Bachelor of Arts (B.A)',
      'Bachelor of Arts in Journalism and Mass Communication (BAJMC)',
      'Bachelor in Physiotherapy (BPT)',
      'Bachelor of Computer Application (BCA)',
      'Bachelor of Vocation in Software Development (B.Voc (SD))',
      'Bachelor of Technology in Artificial Intelligence and Machine Learning (B.Tech (AI & ML))'
    ],
    afterGraduation: [
      '(CTIPS) Master of Pharmacy in Pharmaceutics (M.Pharm)',
      '(CTIPS) Master of Pharmacy in Pharmacology (M.Pharm)',
      'Master of Technology in Computer Science Engineering/Mechanical Engineering (M.TECH CSE/ME)',
      'Master of Business Administration with a specialization in Human Resources/Finance/Marketing (MBA HR/FINANCE/MARKETING)',
      'Master Of Computer Applications (MCA)',
      'Bachelor of Education under Guru Nanak Dev University (B.Ed GNDU)',
      'Master of Hospitality Management & Catering Technology (MHMCT)',
      'Master of Science in Fashion Designing (M.Sc. Fashion Designing)',
      'Master of Science in Biotechnology (M.Sc Biotechnology)',
      '(CTIPS) Masters of Pharmacy in Pharmaceutical Chemistry (M.Pharma)',
      '(CTIPS) Doctor Of Pharmacy (PHARM.D Post-Baccalaureate)',
      '(CTCP) Doctor Of Pharmacy (PHARM.D Post-Baccalaureate)',
      '(CTCP) Master of Pharmacy in Pharmaceutics (M.Pharm)',
      '(CTCP) Master of Pharmacy in Pharmacology (M.Pharm)',
      '(CTCP) Masters of Pharmacy in Pharmaceutical Chemistry (M.Pharma)',
      'Diploma in Elementary Education (D.EL.ED.)'
    ],
    afterMatric: [
      'Diploma in Computer Science Engineering (CSE)',
      'Diploma in Electronics & Communication Engineering (ECE)',
      'Diploma in Mechanical Engineering (ME)',
      'Diploma in Electrical Engineering (EE)',
      'Diploma in Civil Engineering (CE)',
      'Diploma in Medical Laboratory Technology (DMLT)'
    ]
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the submit button

    if (!recaptchaToken) {
      toast.warn("Please complete the reCAPTCHA verification.");
      setIsSubmitting(false); // Re-enable the submit button
      return;
    }

    try {
      const recaptchaResponse = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/verify-recaptcha`,
        { token: recaptchaToken }
      );

      if (!recaptchaResponse.data.success) {
        toast.error("reCAPTCHA verification failed. Please try again.");
        setIsSubmitting(false); // Re-enable the submit button
        return;
      }

      // Add the form data to Firebase Firestore
      await addDoc(collection(db, FORM_COLLECTION), formData);
      toast.success("Form submitted successfully!");

      // Send form data to your server
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/submit-form`,
        formData
      );
      toast.success("Form submitted successfully!");

      // Reset the form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        state: "",
        campus: "",
        course: "",
      });

      // Reload the page
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Adjust the time as needed
    } catch (error) {
      console.error("Error:", error);
      toast.error("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <div className="relative flex items-center justify-center p-4 overflow-hidden h-screen">
      <div className="w-[27vw] max-sm:w-[90vw] max-lg:w-[50vw] max-w-lg">
        <div className={`rounded-2xl p-8 transition-all duration-500 backdrop-blur-xl relative ${
          isDarkMode ? "bg-gray-800/80" : "bg-white/80"
        }`}>
          {/* Gradient backgrounds */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-red-400 to-pink-500 opacity-20 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-400 via-teal-400 to-green-500 opacity-20 blur-2xl" />
          </div>

          {/* Form Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1
                  className={`text-2xl font-bold mb-1 flex items-center gap-2 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Enquire Now
                  <Sparkles
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-yellow-400" : "text-yellow-500"
                    }`}
                  />
                </h1>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Start your journey with us
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                    : "bg-yellow-100 text-gray-700 hover:bg-yellow-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 p-4">
              {[
                { id: "fullName", type: "text", label: "Full Name" },
                { id: "phone", type: "tel", label: "Phone Number" },
                { id: "email", type: "email", label: "Email Address" }
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label
                    htmlFor={field.id}
                    className={`absolute left-3 -top-2.5 bg-inherit px-2 text-xs transition-all
                      ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className={`w-full rounded-lg mt-2 px-4 py-2.5 text-sm border transition-colors
                      ${isDarkMode 
                        ? "bg-gray-700/50 text-white border-gray-600 focus:border-yellow-400" 
                        : "bg-white text-gray-800 border-gray-200 focus:border-yellow-500"}`}
                    required
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                { [
                  {
                    id: "state",
                    label: "State",
                    options: states,
                  },
                  {
                    id: "campus",
                    label: "Campus",
                    options: campuses,
                  }
                ].map((select) => (
                  <div key={select.id} className="relative">
                    <label
                      htmlFor={select.id}
                      className={`absolute left-3 -top-2.5 bg-inherit px-2 text-xs
                        ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {select.label}
                    </label>
                    <select
                      id={select.id}
                      value={formData[select.id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [select.id]: e.target.value })
                      }
                      className={`w-full rounded-lg mt-2 px-4 py-2.5 text-sm border appearance-none
                        ${isDarkMode 
                          ? "bg-gray-700/50 text-white border-gray-600" 
                          : "bg-white text-gray-800 border-gray-200"}`}
                      required
                    >
                      <option value="">Select {select.label}</option>
                      {select.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Course Select with Updated Label */}
              <div className="relative">
                <label
                  htmlFor="course"
                  className={`absolute left-3 -top-2.5 z-10 bg-inherit px-2 text-xs
                    ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Course
                </label>
                <select
                  id="course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className={`w-full rounded-lg mt-2 px-4 py-2.5 text-sm border appearance-none
                    ${isDarkMode 
                      ? "bg-gray-700/50 text-white border-gray-600" 
                      : "bg-white text-gray-800 border-gray-200"}`}
                  required
                >
                  <option value="">Select Course</option>
                  <optgroup label="After +2/Diploma">
                    {allCourses.after12.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </optgroup>
                  <optgroup label="After Graduation">
                    {allCourses.afterGraduation.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </optgroup>
                  <optgroup label="After Matric">
                    {allCourses.afterMatric.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </optgroup>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                  className="w-full md:w-auto"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting} // Disable the button when submitting
                className={`w-full p-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed" // Styling for disabled state
                    : isDarkMode
                    ? "bg-yellow-400 hover:bg-yellow-500"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer 
        className="mt-4"
        limit={1} // Limit notifications to 1 at a time
        autoClose={3000} // Close after 3 seconds
      />
    </div>
  );
}