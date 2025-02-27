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
    <div className="relative flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-lg pt-0">
        <div
          className={`rounded-2xl p-8 transition-all duration-500 backdrop-blur-xl overflow-hidden relative ${
            isDarkMode ? "bg-gray-800/80" : "bg-white/80"
          }`}
        >
          <div
            className="absolute top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-red-400 to-pink-500 opacity-20 blur-2xl"
            style={{ zIndex: -1 }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-400 via-teal-400 to-green-500 opacity-20 blur-2xl"
            style={{ zIndex: -1 }}
          ></div>

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

          <form onSubmit={handleSubmit} className="space-y-5 relative">
            {[
              {
                id: "fullName",
                type: "text",
                label: "Full Name",
                value: formData.fullName,
                pattern: "^[a-zA-Z ]{3,}$",
                error:
                  "Name must be at least 3 characters long and contain only letters and spaces.",
              },
              {
                id: "phone",
                type: "tel",
                label: "Phone Number",
                value: formData.phone,
                pattern: "^[0-9]{10}$",
                error: "Phone number must be 10 digits.",
              },
              {
                id: "email",
                type: "email",
                label: "Email Address",
                value: formData.email,
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                error: "Invalid email format.",
              },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  type={field.type}
                  id={field.id}
                  value={field.value}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.id]: e.target.value })
                  }
                  className={`peer w-full rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all duration-300 focus:ring-4 focus:ring-opacity-50 ${
                    isDarkMode
                      ? "bg-gray-700/50 text-white border-gray-600 focus:border-yellow-400 focus:ring-yellow-400"
                      : "bg-white text-gray-800 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                  }`}
                  placeholder=" "
                  required
                  pattern={field.pattern}
                  title={field.error}
                />
                <label
                  htmlFor={field.id}
                  className={`absolute left-4 top-4 text-sm transition-all duration-300 cursor-text ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  } peer-focus:text-xs peer-focus:top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base ${
                    isDarkMode
                      ? "peer-focus:text-yellow-400"
                      : "peer-focus:text-yellow-500"
                  }`}
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "state",
                  label: "Select State",
                  options: ["State 1", "State 2", "State 3"],
                },
                {
                  id: "campus",
                  label: "Select Campus",
                  options: ["Campus 1", "Campus 2", "Campus 3"],
                },
              ].map((select) => (
                <div key={select.id} className="relative">
                  <select
                    value={formData[select.id]}
                    onChange={(e) =>
                      setFormData({ ...formData, [select.id]: e.target.value })
                    }
                    className={`w-full appearance-none rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-4 focus:ring-opacity-50 ${
                      isDarkMode
                        ? "bg-gray-700/50 text-white border-gray-600 focus:border-yellow-400 focus:ring-yellow-400"
                        : "bg-white text-gray-800 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                    }`}
                    required
                  >
                    <option value="">{select.label}</option>
                    {select.options.map((opt) => (
                      <option
                        key={opt}
                        value={opt.toLowerCase().replace(" ", "")}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="relative">
              <select
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className={`w-full appearance-none rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-4 focus:ring-opacity-50 ${
                  isDarkMode
                    ? "bg-gray-700/50 text-white border-gray-600 focus:border-yellow-400 focus:ring-yellow-400"
                    : "bg-white text-gray-800 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                }`}
                required
              >
                <option value="">Select Course</option>
                {["Course 1", "Course 2", "Course 3"].map((course) => (
                  <option
                    key={course}
                    value={course.toLowerCase().replace(" ", "")}
                  >
                    {course}
                  </option>
                ))}
              </select>
              <ChevronDown
                className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
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
      <ToastContainer className="mt-4" />
    </div>
  );
}
