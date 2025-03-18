"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Sun, Moon, Sparkles, X } from "lucide-react";
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
    course: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Manage button disabled state
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    "Puducherry",
  ];

  const allCourses = {
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

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = "Full name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!/^[0-9]{10}$/.test(formData.phone))
      errors.phone = "Phone number must be 10 digits.";
    if (!formData.email) errors.email = "Email address is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email address is invalid.";
    if (!formData.state) errors.state = "State is required.";
    if (!formData.course) errors.course = "Course selection is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true); // Disable the submit button

    if (!recaptchaToken) {
      toast.warn("Please complete the reCAPTCHA verification.");
      setIsSubmitting(false); // Re-enable the submit button
      return;
    }

    try {
      // Try to verify recaptcha
      let recaptchaVerified = false;
      try {
        const recaptchaResponse = await axios.post(
          `${import.meta.env.VITE_APP_API_URL}/verify-recaptcha`,
          { token: recaptchaToken }
        );
        recaptchaVerified = recaptchaResponse.data.success;
      } catch (recaptchaError) {
        console.error("reCAPTCHA verification error:", recaptchaError);
        // If in development mode, proceed anyway for testing
        if (import.meta.env.DEV) {
          recaptchaVerified = true;
          console.log("Development mode: Bypassing reCAPTCHA verification");
        }
      }

      if (!recaptchaVerified) {
        toast.error("reCAPTCHA verification failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Add the form data to Firebase Firestore
      try {
        await addDoc(collection(db, FORM_COLLECTION), formData);
      } catch (firestoreError) {
        console.error("Firebase error:", firestoreError);
        // Continue with form submission even if Firestore fails
      }

      // Send form data to your server
      try {
        await axios.post(
          `${import.meta.env.VITE_APP_API_URL}/submit-form`,
          formData
        );
      } catch (submitError) {
        console.error("Form submission error:", submitError);
        // In development mode, consider the submission successful for testing
        if (!import.meta.env.DEV) {
          throw submitError; // Only rethrow in production
        }
      }

      // Show success message
      setModalMessage("Form submitted successfully!");
      setIsModalOpen(true);

      // Reset the form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        state: "",
        course: "",
      });
    } catch (error) {
      console.error("Error:", error);
      // Show error message
      setModalMessage("There was an error submitting the form. Please try again later.");
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <div className="flex items-center justify-center p-4 overflow-hidden min-h-screen main-[1700px]:h-full">
      <div className="w-full max-w-md p-2">
        <div
          className={`rounded-2xl p-6 transition-all duration-500 backdrop-blur-xl relative ${
            isDarkMode ? "bg-gray-900/90" : "bg-white/90"
          }`}
        >
          {/* Gradient backgrounds */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-red-400 to-pink-500 opacity-20 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-400 via-teal-400 to-green-500 opacity-20 blur-2xl" />
          </div>

          {/* Form Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1
                  className={`text-2xl font-bold mb-1 flex items-center gap-2 ${
                    isDarkMode ? "text-text_color" : "text-gray-800"
                  }`}
                >
                  Enquire Now
                  <Sparkles
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-[#fcc804]" : "text-[#fcc804]"
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "fullName", type: "text", label: "Full Name" },
                { id: "phone", type: "tel", label: "Phone Number" },
                { id: "email", type: "email", label: "Email Address" },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label
                    htmlFor={field.id}
                    className={`absolute left-3 -top-2.5 bg-inherit px-2 text-xs transition-all
                      ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                    className={`w-full rounded-lg mt-2 px-4 py-2.5 text-sm border transition-colors
                      ${
                        isDarkMode
                          ? "bg-gray-800 text-white border-gray-600 focus:border-yellow-400"
                          : "bg-white text-gray-800 border-gray-300 focus:border-yellow-500"
                      }`}
                    required
                  />
                  {formErrors[field.id] && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              {/* State field - now full width */}
              <div className="relative">
                <label
                  htmlFor="state"
                  className={`absolute left-3 -top-2.5 bg-inherit px-2 text-xs
                    ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  State
                </label>
                <select
                  id="state"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      state: e.target.value,
                    })
                  }
                  className={`w-full rounded-lg mt-2 px-4 py-2.5 text-sm border appearance-none
                    ${
                      isDarkMode
                        ? "bg-gray-800 text-white border-gray-600"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                  required
                >
                  <option value="">Select State</option>
                  {states.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                {formErrors.state && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.state}
                  </p>
                )}
              </div>

              {/* Course Select with Updated Label */}
              <div className="relative">
                <label
                  htmlFor="course"
                  className={`absolute left-3 -top-2.5 z-10 bg-inherit px-2 text-xs
                    ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  Course
                </label>
                <select
                  id="course"
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className={`w-full rounded-lg mt-2 px-4 py-2.5 text-sm border appearance-none
                    ${
                      isDarkMode
                        ? "bg-gray-800 text-white border-gray-600"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                  required
                >
                  <option value="">Select Course</option>
                  <optgroup label="After +2/Diploma">
                    {allCourses.after12.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="After Graduation">
                    {allCourses.afterGraduation.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="After Matric">
                    {allCourses.afterMatric.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </optgroup>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                {formErrors.course && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.course}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                  className="w-full md:w-auto max-sm:w-80"
                />
                {formErrors.recaptcha && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.recaptcha}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting} // Disable the button when submitting
                className={`w-full p-4 text-2xl rounded-xl text-dark_yellow_text font-semibold transition-all duration-300 hover:scale-105 ${
                  isSubmitting
                    ? "bg-light_button_color cursor-not-allowed" // Styling for disabled state
                    : isDarkMode
                    ? "bg-button_color"
                    : "bg-button_color "
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-[9999]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[9998]"
      >
        <div className={`relative w-full max-w-md p-6 rounded-xl shadow-2xl ${
          isDarkMode 
            ? "bg-primary border border-gray-700 text-text_color" 
            : "bg-white border border-gray-300 text-dark_text"
        }`}>
          <button 
            onClick={() => setIsModalOpen(false)} 
            className="absolute top-2 right-2 flex items-center justify-center h-8 w-8 rounded-full transition-colors hover:bg-opacity-20 hover:bg-gray-500"
            aria-label="Close"
          >
            <X className={`h-5 w-5 ${isDarkMode ? "text-text_color" : "text-primary"}`} />
          </button>
          
          <div className="text-center py-6 px-2">
            <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              modalMessage.includes("successfully") 
                ? "bg-button_color text-dark_yellow_text" 
                : "bg-secondary text-text_color"
            }`}>
              {modalMessage.includes("successfully") ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <h2 className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-text_color" : "text-dark_text"
            }`}>
              {modalMessage}
            </h2>
            <button
              className="mt-4 px-6 py-2.5 rounded-lg font-medium bg-button_color text-dark_yellow_text hover:bg-light_button_color transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <ToastContainer className="mt-4" position="top-right" />
    </div>
  );
}
