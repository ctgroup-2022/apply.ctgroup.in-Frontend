import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";

'use client';

const LuckyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const popupAnimation = useSpring({
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "scale(1)" : "scale(0.8)",
    config: { tension: 200, friction: 20 },
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    campus: "",
    course: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Enquiry submitted!\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nState: ${formData.state}\nCampus: ${formData.campus}\nCourse: ${formData.course}`
    );
    setFormData({
      name: "",
      phone: "",
      email: "",
      state: "",
      campus: "",
      course: "",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setShowPopup(true);
    }, 130000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center pt-40 md:pt-56">
          <Confetti width={windowSize.width} height={windowSize.height} />
          <animated.div
            style={popupAnimation}
            className="relative bg-white rounded-lg shadow-xl overflow-hidden w-11/12 max-w-lg p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Enquire Now
              </h1>

              {/* Enquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    required
                  >
                    <option value="" disabled>
                      Select State
                    </option>
                    <option value="State1">State 1</option>
                    <option value="State2">State 2</option>
                  </select>
                  <select
                    name="campus"
                    value={formData.campus}
                    onChange={handleInputChange}
                    className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    required
                  >
                    <option value="" disabled>
                      Select Campus
                    </option>
                    <option value="Campus1">Campus 1</option>
                    <option value="Campus2">Campus 2</option>
                  </select>
                </div>
                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    required
                  >
                    <option value="" disabled>
                      Select Course
                    </option>
                    <option value="Course1">Course 1</option>
                    <option value="Course2">Course 2</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md font-bold hover:bg-yellow-600 transition"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default LuckyPopup;