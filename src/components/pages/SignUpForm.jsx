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

  const campuses = ["Shapur", "Maqsudan"];

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
    if (!formData.campus) errors.campus = "Campus is required.";
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

      // Send form data to your server
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/submit-form`,
        formData
      );

      // Show success message
      setModalMessage("Form submitted successfully!");
      setIsModalOpen(true);

      // Reset the form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        state: "",
        campus: "",
        course: "",
      });

    } catch (error) {
      console.error("Error:", error);
      // Show error message
      setModalMessage("There was an error submitting the form.");
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <div className="flex items-center justify-center p-4 overflow-hidden min-h-screen">
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

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    id: "state",
                    label: "State",
                    options: states,
                  },
                  {
                    id: "campus",
                    label: "Campus",
                    options: campuses,
                  },
                ].map((select) => (
                  <div key={select.id} className="relative">
                    <label
                      htmlFor={select.id}
                      className={`absolute left-3 -top-2.5 bg-inherit px-2 text-xs
                        ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                    >
                      {select.label}
                    </label>
                    <select
                      id={select.id}
                      value={formData[select.id]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [select.id]: e.target.value,
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
                      <option value="">Select {select.label}</option>
                      {select.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    {formErrors[select.id] && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors[select.id]}
                      </p>
                    )}
                  </div>
                ))}
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
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
      >
        <div className="bg-black dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 dark:text-black">
            {modalMessage}
          </h2>
          <button
            className="px-4 py-2 bg-primary text-text_color rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
      <ToastContainer className="mt-4" position="top-right" />
    </div>
  );
}