"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Sparkles, Trophy, GraduationCap, Building2, Send } from "lucide-react"
import { db, collection, addDoc } from "./firebase/firebase"
import SignUpForm from "./components/pages/SignUpForm"

const Input = ({ type, id, value, onChange, className, required }) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    className={className}
    required={required}
  />
)

const Select = ({ value, onValueChange, children }) => (
  <div className="relative">
    <select value={value} onChange={(e) => onValueChange(e.target.value)} className="w-full h-12 text-lg bg-white border border-gray-200 rounded">
      {children}
    </select>
  </div>
)

const SelectTrigger = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
)

const SelectValue = ({ placeholder }) => (
  <option value="" disabled>{placeholder}</option>
)

const SelectContent = ({ children }) => (
  <>{children}</>
)

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
)

const Button = ({ type, className, children }) => (
  <button type={type} className={className}>
    {children}
  </button>
)

export default function EnhancedSignUpForm() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    campus: "",
    course: "",
  })

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Add the form data to Firebase Firestore
      const docRef = await addDoc(collection(db, "form_submissions"), formData)
      console.log("Document written with ID: ", docRef.id)
      alert("Form submitted successfully!")
    } catch (e) {
      console.error("Error adding document: ", e)
      alert("There was an error submitting the form.")
    }

    try {
      const response = await fetch("https://register.aryana.co.in/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (response.ok) {
        alert("Form submitted successfully! Check your email.")
        console.log("Response:", result)
      } else {
        alert(`Error: ${result.error}`)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to submit the form.")
    }
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 mt-8">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="src/img/Video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 min-h-screen flex items-center justify-center w-full">
        <div className="container relative mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-2xl font-medium text-white/90">For your</p>
                <div className="relative">
                  <h1 className="relative inline-block bg-white/95 px-8 py-4 text-5xl font-bold tracking-tight border-l-[6px] border-r-[6px] border-yellow-400 shadow-2xl">
                    Safalta Ka Safar!
                  </h1>
                  <div className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-yellow-400 shadow-lg"></div>
                  <div className="absolute -left-2 -bottom-2 h-5 w-5 rounded-full bg-yellow-400 shadow-lg"></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-400/20 rounded-lg">
                    <Trophy className="h-10 w-10 text-yellow-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                      CT Group
                    </p>
                    <div className="flex items-baseline gap-6">
                      <div>
                        <h2 className="text-5xl font-extrabold text-white tracking-wider">NAAC</h2>
                        <p className="text-3xl font-bold text-white/90">GRADE</p>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-50"></div>
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-4xl font-bold text-white shadow-lg">
                          A
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-white/80 max-w-md border-l-4 border-yellow-400 pl-4">
                    TO CT INSTITUTE OF ENGINEERING, MANAGEMENT & TECHNOLOGY
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  A Record of Great Placement
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { value: "₹51", label: "Highest Package LPA", icon: Building2 },
                    { value: "1800+", label: "Recruiters", icon: GraduationCap },
                    { value: "1.5L+", label: "Alumni", icon: Trophy },
                  ].map((stat, index) => (
                    <div key={index} className="group">
                      <div className="relative mx-auto w-36 h-36">
                        <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-xl group-hover:scale-105 transition-transform">
                          <stat.icon className="h-8 w-8 mb-2 text-white/90" />
                          <span className="text-4xl font-bold text-white">{stat.value}</span>
                        </div>
                      </div>
                      <p className="mt-4 text-center text-lg font-semibold text-white/90">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  )
}